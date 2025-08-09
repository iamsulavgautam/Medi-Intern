const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Application = require('../models/Application');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'documentFile') {
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new Error('Document must be a PDF file'), false);
      }
    } else if (file.fieldname === 'photoFile') {
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(new Error('Photo must be an image file'), false);
      }
    } else {
      cb(new Error('Unexpected field'), false);
    }
  }
});

// Submit application
router.post('/submit', upload.fields([
  { name: 'documentFile', maxCount: 1 },
  { name: 'photoFile', maxCount: 1 }
]), async (req, res) => {
  try {
    const applicationData = { ...req.body };

    // Handle program array (if it comes as a string, convert to array)
    if (typeof applicationData.program === 'string') {
      applicationData.program = [applicationData.program];
    }

    // Handle file uploads
    if (req.files) {
      if (req.files.documentFile) {
        const docFile = req.files.documentFile[0];
        applicationData.documentFile = {
          filename: docFile.filename,
          originalName: docFile.originalname,
          path: docFile.path,
          size: docFile.size
        };
      }

      if (req.files.photoFile) {
        const photoFile = req.files.photoFile[0];
        applicationData.photoFile = {
          filename: photoFile.filename,
          originalName: photoFile.originalname,
          path: photoFile.path,
          size: photoFile.size
        };
      }
    }

    // Create new application
    const application = new Application(applicationData);
    await application.save();

    res.status(201).json({
      message: 'Application submitted successfully',
      applicationId: application._id
    });
  } catch (error) {
    console.error('Application submission error:', error);
    
    // Clean up uploaded files if application creation fails
    if (req.files) {
      Object.values(req.files).flat().forEach(file => {
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
        }
      });
    }

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation error',
        errors: Object.values(error.errors).map(err => err.message)
      });
    }

    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all applications (Admin only)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const applications = await Application.find()
      .sort({ createdAt: -1 }) // Sort by creation time, newest first
      .select('-__v'); // Exclude version field

    res.json({
      message: 'Applications retrieved successfully',
      count: applications.length,
      applications
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get single application (Admin only)
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.json({
      message: 'Application retrieved successfully',
      application
    });
  } catch (error) {
    console.error('Error fetching application:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Download file (Admin only)
router.get('/download/:id/:fileType', authenticateToken, async (req, res) => {
  try {
    const { id, fileType } = req.params;
    
    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    let fileInfo;
    if (fileType === 'document' && application.documentFile) {
      fileInfo = application.documentFile;
    } else if (fileType === 'photo' && application.photoFile) {
      fileInfo = application.photoFile;
    } else {
      return res.status(404).json({ message: 'File not found' });
    }

    const filePath = path.resolve(fileInfo.path);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found on server' });
    }

    res.download(filePath, fileInfo.originalName);
  } catch (error) {
    console.error('Error downloading file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete application (Admin only)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Delete associated files
    if (application.documentFile && fs.existsSync(application.documentFile.path)) {
      fs.unlinkSync(application.documentFile.path);
    }
    
    if (application.photoFile && fs.existsSync(application.photoFile.path)) {
      fs.unlinkSync(application.photoFile.path);
    }

    // Delete application from database
    await Application.findByIdAndDelete(req.params.id);

    res.json({ message: 'Application deleted successfully' });
  } catch (error) {
    console.error('Error deleting application:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  // Personal Information
  familyName: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  nationality: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  passportNumber: {
    type: String,
    required: true,
    trim: true
  },

  // Academic Information
  medicalSchool: {
    type: String,
    required: true,
    trim: true
  },
  yearOfStudy: {
    type: String,
    required: true
  },
  graduationLevel: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },

  // Program Selection
  program: [{
    type: String,
    enum: ['Medical', 'Nursing', 'Radiology', 'Radiography', 'Pharmacy', 'Dental', 'Physiotherapy']
  }],
  
  // Department A
  departmentA: {
    type: String,
    trim: true
  },
  startDateA: {
    type: Date,
    required: true
  },
  endDateA: {
    type: Date,
    required: true
  },
  
  // Department B (Optional)
  departmentB: {
    type: String,
    trim: true
  },
  startDateB: {
    type: Date
  },
  endDateB: {
    type: Date
  },

  clerkshipType: {
    type: String,
    enum: ['Pre-clinical Clerkship', 'Clinical Clerkship']
  },
  accommodation: {
    type: String,
    enum: ['Medical Intern House (Shared)', 'Host Family Stay', 'Private Apartment', 'Hotel Partnership']
  },

  // File uploads
  documentFile: {
    filename: String,
    originalName: String,
    path: String,
    size: Number
  },
  photoFile: {
    filename: String,
    originalName: String,
    path: String,
    size: Number
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
applicationSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Application', applicationSchema);
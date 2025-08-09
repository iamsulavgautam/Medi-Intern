# Medical Internship Nepal - Full Stack Application

This is a complete full-stack application for managing medical internship applications with an admin dashboard.

## Features

### Frontend
- Medical internship application form
- Multiple program pages (Medical, Dental, Physiotherapy, Midwifery)
- File upload support (documents and photos)
- Admin login and dashboard
- Responsive design with Tailwind CSS

### Backend
- Node.js with Express
- MongoDB database with Mongoose
- File upload handling with Multer
- JWT authentication for admin
- RESTful API endpoints

### Admin Features
- Secure login with hardcoded credentials
- View all applications sorted by creation time
- Search and filter applications
- Download uploaded files
- Delete applications
- Real-time statistics

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   cd server && npm install
   ```

2. **Environment Configuration:**
   The `.env` file is already configured with default values:
   - MongoDB URI: `mongodb://localhost:27017/medical-internship`
   - Admin Email: `admin@medicalinternshipnepal.com`
   - Admin Password: `admin123`
   - JWT Secret: `your-super-secret-jwt-key-change-this-in-production`

3. **Start MongoDB:**
   Make sure MongoDB is running on your system.

4. **Start the Backend Server:**
   ```bash
   cd server
   npm run dev
   ```
   The server will run on `http://localhost:5000`

5. **Start the Frontend:**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify JWT token

### Applications
- `POST /api/applications/submit` - Submit new application
- `GET /api/applications` - Get all applications (Admin only)
- `GET /api/applications/:id` - Get single application (Admin only)
- `GET /api/applications/download/:id/:fileType` - Download files (Admin only)
- `DELETE /api/applications/:id` - Delete application (Admin only)

## Admin Access

### Login Credentials
- **Email:** admin@medicalinternshipnepal.com
- **Password:** admin123

### Admin Dashboard Features
- View all submitted applications
- Search by name, email, or medical school
- Filter by program type
- Download uploaded documents and photos
- Delete applications
- View application statistics

## File Upload

The application supports two types of file uploads:
- **Documents:** PDF files up to 4MB
- **Photos:** Image files (JPEG/PNG) up to 1MB

Files are stored in the `server/uploads` directory and can be downloaded by admins.

## Database Schema

### Application Model
- Personal information (name, email, nationality, etc.)
- Academic information (medical school, year of study, etc.)
- Program selection and preferences
- Department rotations with dates
- File uploads (document and photo)
- Timestamps (created/updated)

### Admin Model
- Email and hashed password
- Creation timestamp

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- File type validation
- File size limits
- CORS protection
- Input validation

## Development

### Backend Development
```bash
cd server
npm run dev  # Uses nodemon for auto-restart
```

### Frontend Development
```bash
npm run dev  # Vite development server
```

## Production Deployment

1. Update environment variables in `.env`
2. Change JWT secret to a secure random string
3. Update admin credentials
4. Set up MongoDB connection string
5. Build frontend: `npm run build`
6. Start backend: `cd server && npm start`

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error:**
   - Ensure MongoDB is running
   - Check the connection string in `.env`

2. **File Upload Issues:**
   - Check file size limits
   - Verify file types are supported
   - Ensure uploads directory exists

3. **Admin Login Issues:**
   - Verify credentials in `.env`
   - Check JWT secret configuration

4. **CORS Issues:**
   - Ensure backend is running on port 5000
   - Check CORS configuration in server.js

## Support

For any issues or questions, please contact the development team or refer to the application documentation.
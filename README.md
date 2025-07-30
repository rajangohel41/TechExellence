# Student Dashboard Application

A full-stack web application for managing student information with React frontend and Node.js backend.

## Project Structure

```
student-dashboard/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   └── styles/         # CSS styles
│   └── package.json        # Frontend dependencies
│
└── backend/                 # Node.js backend application
    ├── src/
    │   ├── controllers/    # Route controllers
    │   ├── models/         # MongoDB models
    │   ├── routes/         # API routes
    │   └── server.js       # Main server file
    ├── uploads/            # Directory for CSV file uploads
    └── package.json        # Backend dependencies
```

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Features
- Student profile management
- CSV data import functionality
- Admin dashboard for data management
- Responsive design
- MongoDB database integration

## Technologies Used
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- File Upload: Multer
- CSV Processing: csv-parser

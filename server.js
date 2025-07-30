import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/student-dashboard')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Student Schema
const studentSchema = new mongoose.Schema({
  enrollment: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Student Dashboard API Running' });
});

app.post('/api/login', async (req, res) => {
  try {
    const { enrollment, password } = req.body;
    
    const student = await Student.findOne({ enrollment, password });
    
    if (student) {
      res.json({ success: true, student });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Create test student
app.post('/api/create-test-student', async (req, res) => {
  try {
    const testStudent = new Student({
      enrollment: '240213107001',
      password: 'student123',
      name: 'John Doe',
      branch: 'Computer Science',
      year: '3rd Year',
      email: 'john@college.edu',
      phone: '9876543210'
    });
    
    await testStudent.save();
    res.json({ message: 'Test student created' });
  } catch (error) {
    if (error.code === 11000) {
      res.json({ message: 'Test student already exists' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

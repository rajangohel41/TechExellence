import express  from 'express';
import mongoose from 'mongoose';

//importing batabase schemas 
import  Student  from './models/Student.js';
import AcadmicInfo from './models/acadmicDetails.js';
import  Documents  from './models/Documents.js';
import  GuardianDetails  from './models/GuardianInfo.js';
import  SocialCategory  from './models/SocialCategory.js';
import  ContactInfo  from './models/ContactInfo.js';

//creating schemas constants
const studentData = new Student({});
const academicData = new AcadmicInfo({});
const guardianData = new GuardianDetails({});
const documentsData = new Documents({})
const socialCategoryData = new SocialCategory({});
const contactInfoData = new ContactInfo({});

//creating connection to the database

let conn = mongoose.createConnection('mongodb://localhost:27017/student-dashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb://localhost:27017/student-dashboard'; 
const db = mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err)); 

app.get('/', (req, res) => {   
      
        
    res.end('Data saved successfully!');
    
  })
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })





const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const  authRoutes = require('./routes/authRoutes');
const  todoroutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';


//enabling cors 
if (!isProduction) {
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
}

app.use('/api', authRoutes);
app.use('api/todo',todoroutes);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));




mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB (companion-app)');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.use('/api', authRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// app.post('/api/login', (req, res) => {
//   res.json({ message: 'Logged in!' });
// });


axios.post('/api/login', data, {
  withCredentials: true, 
});

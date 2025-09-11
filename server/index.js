

const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const  authRoutes = require('./routes/authRoutes')

const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

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
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

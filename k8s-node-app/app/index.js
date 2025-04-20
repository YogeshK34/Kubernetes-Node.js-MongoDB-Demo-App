const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb://mongo-service:27017/testdb';

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('🚀 Hello from Node.js app inside Kubernetes!');
});

app.listen(PORT, () => {
  console.log(`🔥 Server is running on port ${PORT}`);
});

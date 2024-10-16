const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const centerRoutes = require('./routes/center');
const sportRoutes=require('./routes/sport');
const courtRoutes = require('./routes/court');
dotenv.config();

const app = express();
app.use(express.json()); // for parsing application/json

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/center', centerRoutes); // Center routes
app.use('/api/sport',sportRoutes);
app.use('/api/courts', courtRoutes); 
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

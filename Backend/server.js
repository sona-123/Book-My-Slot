// server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Define a root route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Sports Booking API');
});

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});

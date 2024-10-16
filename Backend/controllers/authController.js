// controllers/authController.js
const User = require('../models/User');

// Signup
// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Ensure you have JWT installed

// Login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create a token that includes the user's role
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, user });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ message: 'Error signing in', error });
    }
};

exports.signup = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const user = new User({ name, email, password, role });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

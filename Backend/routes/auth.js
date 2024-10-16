// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Sign-Up Route
router.post('/signup', async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create a new user
        user = new User({
            name,
            email,
            password,
            role,
        });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save the user to the database
        await user.save();

        res.status(201).json({ msg: 'User created successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
});

// Sign-In Route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Create and return JWT
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;

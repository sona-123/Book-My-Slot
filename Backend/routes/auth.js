// routes/auth.js
const express = require('express');
const { signup, login } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup); // Route for signing up
router.post('/login', login);     // Route for logging in

module.exports = router;

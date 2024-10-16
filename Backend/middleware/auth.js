// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');


const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;


exports.isAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Get token from header

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token is not valid' });
        }
        if (user.role !== 'admin') { // Check if user is admin
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }
        req.user = user; // Attach user info to request
        next(); // Proceed to the next middleware or route handler
    });
};

// controllers/centerController.js
const Center = require('../models/Center');

// Create Center
exports.createCenter = async (req, res) => {
    const { name, location } = req.body;

    try {
        const center = new Center({ name, location });
        await center.save();
        res.status(201).json(center);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation error', errors: error.errors });
        }
        console.error('Error creating center:', error);
        res.status(500).json({ message: 'Error creating center', error });
    }
};

// Get All Centers
exports.getCenters = async (req, res) => {
    try {
        const centers = await Center.find(); // Fetch all centers
        res.status(200).json(centers);
    } catch (error) {
        console.error('Error fetching centers:', error);
        res.status(500).json({ message: 'Error fetching centers', error });
    }
};

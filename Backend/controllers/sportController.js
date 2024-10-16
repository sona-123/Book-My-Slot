
const User = require('../models/User'); // If you need to check the user role

const Sport = require('../models/Sport');
const Center = require('../models/Center');

exports.createSport = async (req, res) => {
    const { name, centerId } = req.body;

    try {
        // Check if the center exists
        const center = await Center.findById(centerId);
        if (!center) {
            return res.status(404).json({ message: 'Center not found' });
        }

        // Create sport
        const sport = new Sport({ name, center: centerId });
        await sport.save();

        // Add sport reference to the center
        await Center.findByIdAndUpdate(centerId, { $push: { sports: sport._id } });

        res.status(201).json(sport);
    } catch (error) {
        console.error('Error creating sport:', error);
        res.status(500).json({ message: 'Error creating sport', error });
    }
};

// Middleware to get all sports by center ID
exports.getSportsByCenter = async (req, res) => {
    const { centerId } = req.params;

    try {
        // Check if the center exists
        const center = await Center.findById(centerId);
        if (!center) {
            return res.status(404).json({ message: 'Center not found' });
        }

        // Find all sports for the center
        const sports = await Sport.find({ center: centerId });

        if (!sports || sports.length === 0) {
            return res.status(404).json({ message: 'No sports found for this center' });
        }

        res.status(200).json(sports);
    } catch (error) {
        console.error('Error fetching sports:', error);
        res.status(500).json({ message: 'Error fetching sports', error: error.message });
    }
};

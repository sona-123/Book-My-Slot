// controllers/courtController.js
const Court = require('../models/Court');
const Sport = require('../models/Sport');
const Center = require('../models/Center');

// Create a new court
exports.createCourt = async (req, res) => {
    const { name, sportId, centerId } = req.body;

    try {
        // Check if the sport and center exist
        const sport = await Sport.findById(sportId);
        const center = await Center.findById(centerId);
        
        if (!sport) {
            return res.status(404).json({ message: 'Sport not found' });
        }
        if (!center) {
            return res.status(404).json({ message: 'Center not found' });
        }

        const court = new Court({ name, sport: sportId, center: centerId });
        await court.save();
        res.status(201).json(court);
    } catch (error) {
        console.error('Error creating court:', error);
        res.status(500).json({ message: 'Error creating court', error });
    }
};

// Get courts by sport ID
exports.getCourtsBySport = async (req, res) => {
    const { sportId } = req.params;

    try {
        const courts = await Court.find({ sport: sportId });
        res.json(courts);
    } catch (error) {
        console.error('Error fetching courts:', error);
        res.status(500).json({ message: 'Error fetching courts', error });
    }
};

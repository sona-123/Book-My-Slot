// controllers/courtController.js
const Court = require('../models/Court');
const Sport = require('../models/Sport');

exports.createCourt = async (req, res) => {
    const { name, sportId } = req.body;

    try {
        const court = new Court({ name, sport: sportId });
        await court.save();

        // Add court reference to the sport
        await Sport.findByIdAndUpdate(sportId, { $push: { courts: court._id } });

        res.status(201).json(court);
    } catch (error) {
        res.status(500).json({ message: 'Error creating court', error });
    }
};

exports.getCourtsBySport = async (req, res) => {
    const { sportId } = req.params;

    try {
        const courts = await Court.find({ sport: sportId });
        res.json(courts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courts', error });
    }
};

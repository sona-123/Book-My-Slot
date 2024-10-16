// controllers/sportController.js
const Sport = require('../models/Sport');
const Center = require('../models/Center');

exports.createSport = async (req, res) => {
    const { name, centerId } = req.body;

    try {
        const sport = new Sport({ name, center: centerId });
        await sport.save();

        // Add sport reference to the center
        await Center.findByIdAndUpdate(centerId, { $push: { sports: sport._id } });

        res.status(201).json(sport);
    } catch (error) {
        res.status(500).json({ message: 'Error creating sport', error });
    }
};

exports.getSportsByCenter = async (req, res) => {
    const { centerId } = req.params;

    try {
        const sports = await Sport.find({ center: centerId });
        res.json(sports);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sports', error });
    }
};

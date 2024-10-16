// controllers/centerController.js
const Center = require('../models/Center');

exports.createCenter = async (req, res) => {
    const { name, location } = req.body;

    try {
        const center = new Center({ name, location });
        await center.save();
        res.status(201).json(center);
    } catch (error) {
        res.status(500).json({ message: 'Error creating center', error });
    }
};

exports.getCenters = async (req, res) => {
    try {
        const centers = await Center.find();
        res.json(centers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching centers', error });
    }
};

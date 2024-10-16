// models/Sport.js
const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    center: { type: mongoose.Schema.Types.ObjectId, ref: 'Center', required: true }, // Reference to the center
    courts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Court' }], // Reference to courts for this sport
}, { timestamps: true });

module.exports = mongoose.model('Sport', sportSchema);

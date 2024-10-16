// models/Court.js
const mongoose = require('mongoose');

const courtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sport: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sport', // Reference to the Sport model
        required: true,
    },
    center: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Center', // Reference to the Center model
        required: true,
    },
    availableSlots: {
        type: Number,
        default: 1, // Default number of slots available
    },
});

module.exports = mongoose.model('Court', courtSchema);

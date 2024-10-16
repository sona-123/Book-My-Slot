// models/Court.js
const mongoose = require('mongoose');

const courtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sport: { type: mongoose.Schema.Types.ObjectId, ref: 'Sport', required: true }, // Reference to the sport
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }], // Reference to bookings
}, { timestamps: true });

module.exports = mongoose.model('Court', courtSchema);

// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    court: { type: mongoose.Schema.Types.ObjectId, ref: 'Court', required: true }, // Reference to the court
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who booked
    date: {
        type: Date,
        required: true,
    },
    timeSlot: {
        type: String,
        required: true, // e.g., "10:00 AM - 11:00 AM"
    },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);

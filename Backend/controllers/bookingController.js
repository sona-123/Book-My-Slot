// controllers/bookingController.js
const Booking = require('../models/Booking');
const Court = require('../models/Court');

exports.createBooking = async (req, res) => {
    const { courtId, userId, date, timeSlot } = req.body;

    try {
        const booking = new Booking({ court: courtId, user: userId, date, timeSlot });
        await booking.save();

        // Add booking reference to the court
        await Court.findByIdAndUpdate(courtId, { $push: { bookings: booking._id } });

        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

exports.getBookingsByDateAndSport = async (req, res) => {
    const { courtId, date } = req.params;

    try {
        const bookings = await Booking.find({ court: courtId, date });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
};

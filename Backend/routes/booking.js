// routes/booking.js
const express = require('express');
const { createBooking, getBookingsByDateAndSport } = require('../controllers/bookingController');

const router = express.Router();

router.post('/', createBooking);
router.get('/:courtId/:date', getBookingsByDateAndSport);

module.exports = router;

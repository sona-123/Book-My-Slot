// routes/court.js
const express = require('express');
const { createCourt, getCourtsBySport } = require('../controllers/courtController');

const router = express.Router();

// Define the routes for creating and retrieving courts
router.post('/createCourt', createCourt);
router.get('/getCourts/:sportId', getCourtsBySport);

module.exports = router;

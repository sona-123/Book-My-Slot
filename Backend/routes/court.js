// routes/court.js
const express = require('express');
const { createCourt, getCourtsBySport } = require('../controllers/courtController');

const router = express.Router();

router.post('/', createCourt);
router.get('/:sportId', getCourtsBySport);

module.exports = router;

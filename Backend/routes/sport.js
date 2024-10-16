// routes/sport.js
const express = require('express');
const { createSport, getSportsByCenter } = require('../controllers/sportController');

const router = express.Router();

router.post('/', createSport);
router.get('/:centerId', getSportsByCenter);

module.exports = router;

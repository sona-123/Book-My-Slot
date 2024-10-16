const express = require('express');
const { createSport, getSportsByCenter } = require('../controllers/sportController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/create', authMiddleware, createSport);
router.get('/center/:centerId', authMiddleware, getSportsByCenter);

module.exports = router;

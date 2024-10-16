const express = require('express');
const { createCenter, getCenters } = require('../controllers/centerController');

const router = express.Router();

// POST route for creating a center
router.post('/create', createCenter);

// GET route for fetching all centers
router.get('/', getCenters);

module.exports = router;

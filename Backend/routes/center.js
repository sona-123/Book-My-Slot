// routes/center.js
const express = require('express');
const { createCenter, getCenters } = require('../controllers/centerController');

const router = express.Router();

router.post('/', createCenter);
router.get('/', getCenters);

module.exports = router;

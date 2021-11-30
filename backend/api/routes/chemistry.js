const express = require('express');
const router = express.Router();
const ChemistryController = require('../controllers/ChemistryController.js');

router.get('/chemistryTimeline', ChemistryController.chemistryTimeline);

module.exports = router;

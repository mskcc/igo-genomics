const express = require('express');
const router = express.Router();
const FeedbackController = require('../controllers/FeedbackController.js');

router.get('/allFeedback', FeedbackController.allFeedback);
router.post('/feedback', FeedbackController.feedback);

module.exports = router;

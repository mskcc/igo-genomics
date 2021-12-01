const express = require('express');
const router = express.Router();
const InquiryController = require('../controllers/InquiryController.js');

router.post('/inquiry', InquiryController.inquiry);

module.exports = router;

const express = require('express');
const router = express.Router();
const AssayController = require('../controllers/AssayController.js');

router.get('/ddpcrAssays', AssayController.ddpcrAssays);

module.exports = router;

const express = require('express');
const router = express.Router();

require('./routes/assay')(router);

module.exports = router;

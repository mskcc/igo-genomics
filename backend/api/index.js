const express = require('express');
const router = express.Router();

require('./routes/assay')(router);
require('./routes/schedule')(router);

module.exports = router;

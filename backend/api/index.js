const express = require('express');
const router = express.Router();

require('./routes/assay')(router);
require('./routes/schedule')(router);
require('./routes/chemistry')(router);

module.exports = router;

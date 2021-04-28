const express = require('express');
const router = express.Router();

require('./routes/assay')(router);
require('./routes/schedule')(router);
require('./routes/chemistry')(router);
require('./routes/feedback')(router);

module.exports = router;

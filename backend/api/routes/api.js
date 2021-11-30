const express = require('express');
const app = express();
var assayRouter = require('./assay');

// require('./schedule')(router);
// require('./chemistry')(router);
// require('./feedback')(router);
// require('./inquiry')(router);

app.use('/assay/', assayRouter);

module.exports = app;

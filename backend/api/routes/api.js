const express = require('express');
const app = express();
var assayRouter = require('./assay');
var chemistryRouter = require('./chemistry');

// require('./schedule')(router);
// require('./feedback')(router);
// require('./inquiry')(router);

app.use('/assay/', assayRouter);
app.use('/chemistry/', chemistryRouter);

module.exports = app;

const express = require('express');
const app = express();
var assayRouter = require('./assay');
var chemistryRouter = require('./chemistry');
var feedbackRouter = require('./feedback');

// require('./schedule')(router);
// require('./feedback')(router);
// require('./inquiry')(router);

app.use('/assay/', assayRouter);
app.use('/chemistry/', chemistryRouter);
app.use('/feedback/', feedbackRouter);

module.exports = app;

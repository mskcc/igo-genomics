const express = require('express');
const app = express();
var assayRouter = require('./assay');
var chemistryRouter = require('./chemistry');
var feedbackRouter = require('./feedback');
var inquiryRouter = require('./inquiry');

// require('./schedule')(router);
app.use('/assay/', assayRouter);
app.use('/chemistry/', chemistryRouter);
app.use('/feedback/', feedbackRouter);
app.use('/inquiry/', inquiryRouter);

module.exports = app;

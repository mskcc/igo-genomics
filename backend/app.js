const express = require('express');
const app = express();
const apiRouter = require('./api/routes/api.js');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

app.set('port', process.env.PORT || 8801);

// DB connection
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require('mongoose');

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // make sure we're connected to mongo
      console.log(process.env.ENV);
      console.log('Connected to %s', MONGODB_URL);
      console.log('App is running ... \n');
      console.log('Press CTRL + C to stop the process. \n');
  })
  .catch((err) => {
    console.error('App starting error:', err.message);
    process.exit(1);
  });

// app.use(
//   morgan(function (tokens, req, res) {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, 'content-length'),
//       '-',
//       tokens['response-time'](req, res),
//       'ms',
//       '-',
//       res.user ? res.user.username : 'anonymous',
//     ].join(' ');
//   })
// );

if (process.env.ENV !== 'production') {
  // better for development because its less verbose
  app.use(morgan('common'));
} else {
  app.use(morgan('combined'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// var apiResponse = require('./api/helpers/apiResponse');
app.use('/api', apiRouter);

app.use(express.static('static'));

app.use(morgan('dev'));

let publicDir = path.join(__dirname, 'public');
app.get('/*', function (req, res) {
  res.sendFile(path.join(publicDir, 'index.html'));
});
// app.get('/favicon.ico', function (req, res) {
//   res.sendFile(path.join(publicDir, 'favicon.ico'));
// });

app.use(function (req, res) {
  res.status(404).send({ message: 'Endpoint not found.' });
});

app.listen(app.get('port'), function () {
  console.log('Server is running on port ' + app.get('port'));
});

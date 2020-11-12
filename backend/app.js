require('dotenv').config();

const express = require('express');
const app = express();
const api = require('./api');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 8801);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', api);

app.use(express.static('static'));

app.use(morgan('dev'));

app.use(function (req, res) {
  res.status(404).send({ message: 'Endpoint not found.' });
});

app.listen(8801, function () {
  console.log('Server is running on port ' + 8801);
});

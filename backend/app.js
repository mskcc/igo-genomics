const express = require('express');
const app = express();
const api = require('./api');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');




app.set('port', process.env.PORT || 8801);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', api);

app.use(express.static('static'));

app.use(morgan('dev'));

let publicDir = path.join(__dirname, 'public');
app.get('/', function (req, res) {
  res.sendFile(path.join(publicDir, 'index.html'));
});
app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(publicDir, 'favicon.ico'));
});

app.use(function (req, res) {
  res.status(404).send({ message: 'Endpoint not found.' });
});

app.listen(app.get('port'), function () {
  console.log('Server is running on port ' + app.get('port'));
});

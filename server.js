const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const path = require('path');
import sslRedirect from 'heroku-ssl-redirect';


// Morgan Options
const morgan = require('morgan');

// Express Options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'))
app.use(sslRedirect());

// Express Routes
const ApiRoutes = require('./app/routes/routes.js');
app.use('/api', ApiRoutes);

// sendFile will go here
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Start server
var port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
}).on('error', err => {
  console.log(err);
});

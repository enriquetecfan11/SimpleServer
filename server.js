const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


// Morgan Options
const morgan = require('morgan');


// Express Options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));

// Express Routes
const ApiRoutes = require('./app/routes/routes.js');
app.use('/api', ApiRoutes);

// Start server
var port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
}).on('error', err => {
  console.log(err);
});

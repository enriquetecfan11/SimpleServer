const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const path = require('path');


// Morgan Options
const morgan = require('morgan');

// Express Options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'))

// Add this to package.json     "dev": "set NODE_ENV=dev&& nodemon server.js"
// const env = process.env.NODE_ENV // test
// if (env === 'production') {
//   console.log("Production")
// }else if(env == 'dev'){
//   console.log("dev")
// }

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

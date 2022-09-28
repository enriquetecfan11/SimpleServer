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


// DB Options - Not used in local
// const db = require('./app/models');

// db.sequelize.sync()
// .then(() => {
//     console.log("✅ Successfully connected to the database");
// })
// .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
// });


/*
    Windows = $env:NODE_ENV = 'development'
    Linux && Mac = export NODE_ENV=development
    then run: npm start to use development environment
*/


// var environment = process.env.NODE_ENV;

// if (environment === 'development') {
//   db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and Resync with { force: true }');
//   })
// }

// if (environment === 'production') {
//   db.sequelize.sync();
// }


// Start server
var port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
  // console.log(`👷‍♂️ Environment: ${process.env.NODE_ENV}`);
}).on('error', err => {
  console.log(err);
});

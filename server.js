const express = require('express');
const app = express();

// Express Options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//     res.setHeader('Cache-Control', 'no-cache');
//     next();
// });


// Morgan Options
const morgan = require('morgan');
app.use(morgan('dev'));

// DB Options
const db = require('./app/models');

db.sequelize.sync()
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Routes
app.get('/', (req, res) => {
    res.json({ message: "Hello World, the api works" });
});

const ApiRoutes = require('./app/routes/apiRoutes');
app.use('/api', ApiRoutes);

// Start server
var port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`);
}).on('error', err => {
    console.log(err);
});

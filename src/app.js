var morgan = require('morgan');
var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

// Database model
const Sensores = require("./models/SensorModel")

// Database model sync
Sensores.sync({ force: false }).then(() => {
    // Table created
    console.log('Table created');
}).catch(err => {
    // Table couldn't be created
    console.error('Table couldn\'t be created');
});

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// Routes
const ApiRoutes = require('./routes/apiRoutes');
app.use("/api", ApiRoutes);

// Start server
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`);
}).on('error', err => {
    console.log(err);
});
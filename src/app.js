var morgan = require('morgan');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
const ApiRoutes = require('./routes/apiRoutes');

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
app.use("/api", ApiRoutes);


app.listen(port, () => {
    console.log('🚀 Server is running on port: ' + port);
});
const express = require('express');
const app = express();
const cors = require('cors');


// Express Options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Express Routes
const ApiRoutes = require('./app/routes/routes.js');
app.use('/api', ApiRoutes);



// Morgan Options
const morgan = require('morgan');
app.use(morgan('dev'));


// Start server
var port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`);
}).on('error', err => {
    console.log(err);
});

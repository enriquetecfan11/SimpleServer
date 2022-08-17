const express = require('express');
const app = express();

const cors = require('cors');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const pathToSwaggerDoc = require('path').join(__dirname, 'swagger.json');

// Express Options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


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


// Swagger Options
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Simple IOT Server',
            description: 'Simple IOT Server',
            contact: {
                name: 'Enrique Rodriguez Vela'
            },
            servers: ['http://localhost:3000']
        }
    },
    apis: ['./app/routes/apiRoutes.js']
}

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerOptions)));


// Start server
var port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`);
}).on('error', err => {
    console.log(err);
});

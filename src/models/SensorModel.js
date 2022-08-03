// Database
const { Sequelize } = require('sequelize');

// Postgres database connection
// const sequelize = new Sequelize('postgres://postgres:postgrespw@localhost:49153') 

const user = 'postgres'
const host = 'host.docker.internal'
const database = 'postgres'
const password = 'postgrespw'
const port = '49153'


const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false
})


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const Sensores = sequelize.define('sensores', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dispositivo: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
    {
        timestamps: false,
    }
);



module.exports = Sensores;
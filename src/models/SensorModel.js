// Database
const { Sequelize } = require('sequelize');

// Postgres database connection
const sequelize = new Sequelize('postgres://postgres:postgrespw@localhost:49153') 

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
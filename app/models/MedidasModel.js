module.exports = (sequelize, Sequelize) => {
    const Medidas = sequelize.define('medidas', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        device: {
            type: Sequelize.STRING,
            allowNull: true
        },
        timestamp: {
            type: Sequelize.DATE,
            allowNull: true
        },
        temp: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        humidity: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        rain:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        windspeed:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        winddirection:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        pluviometer:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        wifirrsi: {
            type: Sequelize.FLOAT,
            allowNull: true
        }
    },
        {
            timestamps: true,
        });

    return Medidas;
}
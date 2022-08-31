module.exports = (sequelize, Sequelize) => {
    const Medidas = sequelize.define('medidas', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dispositivo: {
            type: Sequelize.STRING,
            allowNull: true
        },
        hora: {
            type: Sequelize.DATE,
            allowNull: true
        },
        temperatura: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        humedadAire: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        rain:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        wind:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        dirWind:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        luxes:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        wifiRssi: {
            type: Sequelize.FLOAT,
            allowNull: true
        }
    },
        {
            timestamps: true,
        });

    return Medidas;
}
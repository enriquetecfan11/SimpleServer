module.exports = (sequelize, Sequelize) => {
    const Pruebas = sequelize.define('pruebas', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dispositivo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        wifiRssi: {
            type: Sequelize.STRING,
            allowNull: false
        },
        data: {
            type: Sequelize.STRING,
            allowNull: false
        },
        temperatura: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        humedad: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        windspeed: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        rssi: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        snr: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        packetSize: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        }
    },
        {
            timestamps: false,
        }
    );

    return Pruebas;
}
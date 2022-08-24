module.exports = (sequelize, Sequelize) => {
    const Medidas = sequelize.define('medidas', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        device: {
            type: Sequelize.STRING,
            allowNull: false
        },
        timestamp: {
            type: Sequelize.DATE,
            allowNull: false
        },
        temperatura: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        humedad: {
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
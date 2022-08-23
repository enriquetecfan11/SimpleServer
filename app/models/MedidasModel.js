module.exports = (sequelize, Sequelize) => {
    const Medidas = sequelize.define('medidas', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dispositivo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        timestamp: {
            type: Sequelize.DATE,
            allowNull: false
        },
        temperatura: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        humedad: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        wifirrsi: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    },
        {
            timestamps: true,
        });

    return Medidas;
}
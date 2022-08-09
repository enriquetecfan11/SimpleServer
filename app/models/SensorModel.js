module.exports = (sequelize, Sequelize) => {
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
        });

    return Sensores;



}

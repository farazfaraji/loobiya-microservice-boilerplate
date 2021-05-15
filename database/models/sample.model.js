const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('sample',
        {
            sample_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            },
        }
    );
};
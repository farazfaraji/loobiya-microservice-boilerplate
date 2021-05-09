const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('sample',
        {
            sample_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            },
        }
    );
};
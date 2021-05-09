'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('sample',
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
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('sample');
    }
};
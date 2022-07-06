'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      codigoProduto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },
  

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('produtos');
  }
};

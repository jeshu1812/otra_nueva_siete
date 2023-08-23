const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_mi_base', 'postgres', 'mariajesus', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;

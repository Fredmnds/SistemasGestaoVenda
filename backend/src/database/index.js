const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require ('../models/Usuario');
const Clientes = require ('../models/Clientes');
const Produtos = require ('../models/Produtos');


const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Clientes.init(connection);
Produtos.init(connection);


module.exports = connection;



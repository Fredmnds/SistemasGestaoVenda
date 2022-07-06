const { Model, DataTypes } = require('sequelize');

class Clientes extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            telefone: DataTypes.INTEGER,
            cep: DataTypes.INTEGER,
            numero: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Clientes;
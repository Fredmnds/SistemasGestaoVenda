const { Model, DataTypes } = require('sequelize');

class Produtos extends Model {
    static init(sequelize){
        super.init({
            quantidade: DataTypes.INTEGER,
            codigoProduto: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = Produtos;
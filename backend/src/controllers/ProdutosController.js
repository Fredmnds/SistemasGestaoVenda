const Produtos = require('../models/Produtos');

module.exports = {
    async store(req, res){
        const{ quantidade, codigoProduto } = req.body;

        const produto = await Produtos.create({ quantidade, codigoProduto });
        return res.json(produto);
    },
    
    async retornaProdutos(req, res) {
        
        const Produto = await Produtos.findAll();
    
        return res.json(Produto); 
    },
};
const Clientes = require('../models/Clientes');

module.exports = {
    async store(req, res){
        const{ nome, telefone, cep, numero} = req.body;

        const clientes = await Clientes.create({ nome, telefone, cep, numero });
        return res.json(clientes);
    },
    
    async retornaClientes(req, res) {
        
        const Cliente = await Clientes.findAll();
    
        return res.json(Cliente); 
    },
};
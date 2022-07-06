const express = require("express");

const ClientesController = require ('./controllers/ClientesController');
const ProdutosController = require ('./controllers/ProdutosController');

const UsuarioController = require("./controllers/UsuarioController");
const Clientes = require("./models/Clientes");

const router = express.Router();

router.post("/login", UsuarioController.login);
router.get("/usuarios", UsuarioController.retornaUsuarios);
router.post("/usuarios", UsuarioController.adicionaUsuario);
router.post('/clientes', ClientesController.store);
router.get('/clientes', ClientesController.retornaClientes);

router.post('/produtos',ProdutosController.store);
router.get('/produtos',ProdutosController.retornaProdutos);


module.exports = router;

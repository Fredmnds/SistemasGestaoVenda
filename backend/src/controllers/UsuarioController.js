const Usuario = require("../models/Usuario");

module.exports = {
  async login(req, res) {
    try {
      const { nome, senha } = req.body;

      const usuario = await Usuario.findOne({ where: { nome } });

      if (!usuario)
        return res.status(404).json({ error: "Usuário não encontrado!" });

      if (usuario.senha !== senha)
        return res
          .status(401)
          .json({ error: "Senha inválida, tente novamente!" });

      return res.status(200).json(usuario);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async retornaUsuarios(requisicao, resposta) {
    try {
      const usuarios = await Usuario.findAll();

      return resposta.status(200).json(usuarios);
    } catch (error) {
      return resposta.status(500).json({ error: err.message });
    }
  },

  async adicionaUsuario(requisicao, resposta) {
    const dados = requisicao.body;

    const usuario = await Usuario.findOne({ where: { nome: dados.nome } });
    console.log(usuario);
    if (usuario) {
      return resposta.status(400).json({ error: "Nome ja cadastrado" });
    }
    await Usuario.create(dados);
    return resposta.status(201).json(dados);
  },
};

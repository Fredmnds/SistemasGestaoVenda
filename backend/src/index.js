const app = require('./app');
require('./database/index');

const server = require('http').createServer(app);

server.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
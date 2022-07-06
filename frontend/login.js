let form = document.querySelector('#form');
let login = document.querySelector('#user');
let senha = document.querySelector('#senha');

let logado = false;

form.addEventListener('submit', event => {
  event.preventDefault();

  let dados = {
    nome: login.value,
    senha: senha.value
  }

  console.log(dados)

  fetch('http://localhost:3000/login', {
    method: 'POST',
    crossDomain: true,
    body: JSON.stringify(dados),
    headers:{'Content-Type': 'application/json'}

  }).then(function (back) {
    return back.text();
    
  }).then(function (resposta) {
    const dados = JSON.parse(resposta);

    if(!dados.error) {
      document.location.href = './index.html';

    } else {
      alert('Usuário ou senha inválidos!');
    }
  })
})
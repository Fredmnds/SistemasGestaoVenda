
const btn = document.querySelector('#enviar');
let nome = document.querySelector('#nome');
let tel = document.querySelector('#telefone');
let cep = document.querySelector('#cep');
let num = document.querySelector('#numero');

btn.addEventListener('click', () => {
    const cliente = getDadosForm()
    enviarDados(cliente)
})

function getDadosForm(){
    const nome = document.querySelector('#nome');
    const tel = document.querySelector('#telefone');
    const cep = document.querySelector('#cep');
    const num = document.querySelector('#numero');

    
    let dados = {
      nome: nome.value,
      telefone: tel.value,
      cep: cep.value,
      numero: num.value
      
    }
    return dados
    
}

async function enviarDados (dados) {
    
    const resp = await fetch('http://localhost:3000/clientes', {
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
        })
        limpaCampos();
    }

function limpaCampos(){
    document.querySelector('#nome').value = '';
    document.querySelector('#telefone').value = '';
    document.querySelector('#cep').value = '';
    document.querySelector('#numero').value = '';
}
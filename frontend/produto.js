const divTotalpro = document.querySelector('#divTotal');
const btn = document.querySelector('#botao');

btn.addEventListener('click', () => {
    const produto = getDadosForm()
    enviarDados(produto)
})

function getDadosForm(){
    const quantidade = document.querySelector('#quant');
    const Produto = document.querySelector('#item');
    
    let dados = {
      quantidade: quantidade.value,
      codigoProduto: Produto.value,
 
    }
    return dados
    
}

async function enviarDados (dados) {
    
    const resp = await fetch('http://localhost:3000/produtos', {
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
    document.querySelector('#quant').value = '';
    document.querySelector('#item').value = '';
}

async function recebeDados () {
    
    const recebe = await fetch('http://localhost:3000/produtos')
    const recebeJson = await recebe.json()
    PreencheDivs(recebeJson)
    
}

    function PreencheDivs(recebeJson){
        let totalPedidos = recebeJson.length
        let totalProdutos = 0;
        recebeJson.forEach(prod => {
            totalProdutos+=prod.quantidade
            
            
        });
        divTotalpro.innerHTML= `
        <div class='col-lg-4 col-sm-12' style="padding-bottom: 15px;">
              <div class="card" style="width:80%; border-radius: 15px;padding-bottom: 15px;">
                <div class="card-body" id="unidadeprodutos">
                  <p class="card-title">Total de Pedidos</p>
                  <p class="card-text" id="pedidos">${totalPedidos} pedidos</p>
                </div>
              </div>
            </div>
            <div class='col-lg-4 col-sm-12' style="padding-bottom: 15px;">
              <div class="card" style="width:80%; border-radius: 15px;padding-bottom: 15px;">
                <div class="card-body">
                  <p class="card-title">Lucro Bruto (R$)</p>
                  <p class="card-text">R$${totalProdutos*4.5}</p>
                </div>
              </div>
            </div>
            <div class='col-lg-4 col-sm-12' style="padding-bottom: 15px;">
              <div class="card" style="width:80%; border-radius: 15px;padding-bottom: 15px;">
                <div class="card-body">
                  <p class="card-title">Lucro líquido (R$)</p>
                  <p class="card-text">R$${(totalProdutos*4.5)*0.65}</p>
                </div>
              </div>
            </div>
        `
    }
recebeDados()
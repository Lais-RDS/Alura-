let totalGeral = 0; 
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';
document.getElementById('quantidade').value = 1;



function adicionar(){
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
let preco = quantidade * valorUnitario;
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML +=  `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
</section>`;
totalGeral += preco;
let CampoTotal = document.getElementById('valor-total');
CampoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = 1;


}



function limpar(){

    totalGeral = 0; 
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = 1;
}


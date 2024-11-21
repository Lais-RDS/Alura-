

function comprar(){
    let tipo = document.getElementById('tipo-ingresso')
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }
    
    if (tipo.value == 'pista'){
        comprarPista(qtd);

    } else if (tipo.value == 'superior'){
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
        }

}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert ('Quantidade indisponivel para pista');
    }else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra Realizada com sucesso!');
    }
}

function comprarSuperior(qtd){
    let qtdsuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdsuperior) {
        alert ('Quantidade indisponivel para superior');
    }else {
        qtdsuperior = qtdsuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdsuperior;
        alert ('Compra Realizada com sucesso!');
    }
}
function comprarInferior(qtd){
    let qtdinferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdinferior) {
        alert ('Quantidade indisponivel para inferior');
    }else {
        qtdinferior = qtdinferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdinferior;
        alert ('Compra Realizada com sucesso!');
    }
}

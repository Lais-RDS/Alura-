function calculadora(operacao,a,b){
    switch (operacao){
        case adicao:
            return adicao(a,b);
        case subtracao:
            return subtracao(a,b);
        case divisao:
            return divisao(a,b);
        case multiplicacao:
            return multiplicacao(a,b);
            
        default:
                return "operacao invalida";
                }


}

function adicao (a,b){
    let soma = a+b;
    return soma;

}

function subtracao(a,b){
    let subtracao = a-b;
    return subtracao;    
}

function divisao(a,b){
    let divisao = a/b;
    return divisao
    
}

function multiplicacao(a,b){
    let multiplicacao = a*b;
    return multiplicacao;
    
}


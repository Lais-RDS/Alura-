function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let origem = parseInt(document.getElementById('de').value);
  let final = parseInt(document.getElementById('ate').value);
  
  let sorteados = [];
  let numero;

   for (let i = 0; i < quantidade; i++){
      numero = obterNumerosAleatorios (origem , final);
      while (sorteados.includes(numero)){
        numero = obterNumerosAleatorios (origem , final)
      }
      sorteados.push(numero);
    }
  


  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo" id="QtdNumeroSorteados">Números sorteados: ${sorteados} </label>`;

  }



function obterNumerosAleatorios (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function Reiniciar () {
  
}

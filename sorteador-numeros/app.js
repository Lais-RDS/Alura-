function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let origem = parseInt(document.getElementById('de').value);
  let final = parseInt(document.getElementById('ate').value);
  
  alert(`quantidade: ${quantidade}`);
  alert(`do numero: ${origem}`);
  alert(`até o numero: ${final}`);
  let numero = obterNumerosAleatorios (origem , final);
}

function obterNumerosAleatorios (min, max){
  return Math.random() * (max - min) + min 
}
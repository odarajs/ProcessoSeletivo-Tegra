
let botao = document.querySelector('#button')

function calcular(campo,numeros,ultimosnumeros,sorteioNumber,resultado) {
    campo = document.querySelector('#campo-Valor1').value
    numeros = campo.split(', ').map((campo) => parseInt(campo))
    sorteioNumber = numeros.sort((a, b) => a - b)
    ultimosnumeros = sorteioNumber.join(', ');
    
    resultado = document.querySelector('#result-total').innerHTML = `Números recebidos: ${campo}<br>
    Ordenados: ${ultimosnumeros}<br>
    `
}


botao.addEventListener('click', calcular)
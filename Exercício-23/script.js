let botao = document.querySelector('#button')
function calcular (inputValor1,inputValor2,resultado) {
    inputValor1 = parseFloat(document.querySelector('#campo-Valor1').value)
    inputValor2 = parseFloat(document.querySelector('#campo-Valor2').value)
    soma = 0;

    for (let index = inputValor1; index < inputValor2; index++ ) {
        if (index % 2 == 1) {
            soma += index
        }
       
    }
    resultado = document.querySelector('#resul-total').innerHTML = `Digite dois números:<br> ${inputValor1}<br>${inputValor2}<br>
    SOMA DOS ÍMPARES = ${soma}
    `
}
botao.addEventListener('click', calcular)
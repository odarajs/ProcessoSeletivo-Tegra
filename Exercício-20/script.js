let botao = document.querySelector('#button')
function calcular(numeroInicial,numeroFinal,soma,resultado) {
    numeroInicial = parseInt(document.querySelector('#numero-inicial').value)
    numeroFinal = parseInt(document.querySelector('#numero-final').value)
    
    soma = 0;
    for (let contador = numeroInicial; contador <= numeroFinal; contador++) {
        soma = soma + contador
        
        resultado = document.querySelector('#resul-total').innerHTML = `Número inicial: ${numeroInicial}<br>
        Número final: ${numeroFinal}<br> Resultado: ${soma}
        `
    }
    
}
button.addEventListener("click", calcular);

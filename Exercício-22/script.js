let botao = document.querySelector('#button')
function calcular(inputValor,resultado) {
    inputValor = Math.abs(document.querySelector('#campo-Valor').value)
    tabuada = '';
    for (let index = 1; index <= 10; index++) {
        tabuada += `${inputValor} X ${index} = ${inputValor * index}<br> `
        
    }
    resultado = document.querySelector('#resul-total').innerHTML = `Deseja a tabuada para qual valor? ${inputValor}
    <br> ${tabuada}<br>
    `
}
botao.addEventListener('click', calcular);
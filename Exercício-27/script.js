let botao = document.querySelector('#button')
function calcular(recebePalavras,plaVRS,plaMin,result) {
    recebePalavras = document.querySelector('#campo_letras').value
    plaMin = recebePalavras.toLowerCase();
    plaVRS = plaMin.split('').reverse().join('');

    if (plaMin === plaVRS) {
        resultadoPla = 'É palíndroma'
    } else {
        resultadoPla = 'Não é palíndroma'
    }

    result = document.querySelector('#result-total').innerHTML = `Palavra: ${recebePalavras}<br>
    Saída: ${resultadoPla}
    `
}





botao.addEventListener('click', calcular)
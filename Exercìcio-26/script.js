let botao = document.querySelector('#button')

function calcular(recebePalavras,contadorvogal,contadorconsoante,result) {
    recebePalavras = document.querySelector('#campo_letras').value
    contadorvogal = recebePalavras.split('').filter((letra) => 'aeiouAEIOU'.includes(letra)).length;
    contadorconsoante = recebePalavras.split('').filter((letra) => 'qwrtypsdfghjklçzxcvbnmQWRTYPSDFGHJKLÇZXCVBNM'.includes(letra)).length;

    result = document.querySelector('#result-total').innerHTML = `Palavra: ${recebePalavras}<br>
    Vogais: ${contadorvogal}<br>
    Consoantes: ${contadorconsoante}<br>
    `
    
}
botao.addEventListener('click', calcular)
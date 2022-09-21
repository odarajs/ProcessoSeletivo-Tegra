let botao = document.querySelector('#button')

function pegarDV(arrayValidadora, digitos) {
    let mult = digitos.map((caracter, index) => caracter * arrayValidadora[index]).reduce((acumulador, caracter) => acumulador + caracter);
    let resto = mult % 11;
    let dv = resto < 2 ? 0 : 11 - resto;
    
    return dv
}

function calcular() {
    let cnpj = document.querySelector('#valor').value;
    let primeiroBloco = cnpj.split('-')[0];
    let segundoBloco = cnpj.split('-')[1];
    
    let digitos = primeiroBloco.split('').filter((caracter) => '1234567890'.includes(caracter));
    let digitosInt = digitos.map((caracter) => parseInt(caracter));
    
    let primeiroDV = pegarDV([5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2], digitosInt)
    digitosInt.push(primeiroDV);
    let segundoDV = pegarDV([6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2], digitosInt)
    
    let valido = segundoBloco === [primeiroDV, segundoDV].join('');

    let resultado = document.querySelector('#result-total')
    resultado.innerHTML = `CNPJ: ${cnpj}<br>Saída: ${valido ? 'Válido' : 'Inválido'}<br>`
}
botao.addEventListener('click', calcular)
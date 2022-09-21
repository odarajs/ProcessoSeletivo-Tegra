function calcular(Cred1,valor,soma) {
    Cred1 = parseInt (document.querySelector('#quant-M').value)
    
    soma = (50 + (Cred1 > 100 ? (Cred1 - 100) * 2 : 0)).toFixed(2);
    
    valor = document.querySelector('#result-total').innerHTML = `Digite a quantidade de minutos: ${Cred1} |
    Valor a pagar: R$ ${soma}
    `
}
function calcular(preco,unit,dinhero,troco,soma,result) {
    preco = Math.abs(document.querySelector('#preco-unit').value)
    unit  = Math.abs(document.querySelector('#quant').value)
    dinhero = Math.abs(document.querySelector('#valor-receb').value)

    soma = preco * unit
    troco = dinhero - soma

    if(soma > dinhero){
        result = document.querySelector('#result-total').innerHTML = `Preço unitário do produto: ${preco} |
        Quantidade comprada: ${unit}<br><br>Dinheiro recebido: R$ ${dinhero}<br><br> DINHEIRO INSUFICIENTE. FALTAM R$ ${(dinhero + soma).toFixed(2)}
        `
    }else {
        result = document.querySelector('#result-total').innerHTML = `Preço unitário do produto: ${preco} |
        Quantidade comprada: ${unit} | Dinheiro recebido: R$ ${dinhero} <br>TROCO = R$ ${(troco).toFixed(2)}
        `
    }

}
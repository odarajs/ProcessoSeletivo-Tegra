let botao = document.querySelector('#button')
function calcular(recebeValor,valorinteiro,MrValor,MnValor,result) {
    recebeValor = document.querySelector('#valor').value
    valorinteiro = recebeValor.split(', ').map((valor) => parseInt(valor));

    MrValor = Math.max(...valorinteiro);
    MnValor = Math.min(...valorinteiro);

    result = document.querySelector('#result-total').innerHTML = `Valores: ${recebeValor}<br>
    Saída: ${MnValor} e ${MrValor} <br>
    `
}
botao.addEventListener('click', calcular)
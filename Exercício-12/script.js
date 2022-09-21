function calcular(coefi1,coefi2,coefi3,x1,x2,delt,result) {
    coefi1 = parseFloat(document.querySelector(`#c-A`).value)
    coefi2 = parseFloat(document.querySelector(`#C-B`).value)
    coefi3 = parseFloat(document.querySelector(`#C-C`).value)

    delt = Math.sqrt(coefi2 ** 2 - 4 * coefi1 * coefi3)
    x1 = ((0 - coefi2 + delt) / (2 * coefi1))
    x2 = ((0 - coefi2 - delt) / (2 * coefi1))

    if(isNaN(x1)){
        result = document.querySelector('#result-total').innerHTML = `Coeficiente a: ${coefi1}<br>Coeficiente b:
        ${coefi2}<br>Coeficiente c: ${coefi3}<br>Esta equação não possui raízes reais<br><br>`
    }else{
        result = document.querySelector('#result-total').innerHTML = `Coeficiente a: ${coefi1}<br>Coeficiente b:
        ${coefi2}<br>Coeficiente c: ${coefi3}<br>X1 = ${x1.toFixed(4)}<br>X2 = ${x2.toFixed(4)}<br><br>`
    }
}
function calcular(dist1,dist2,dist3,resultado,soma) {
    dist1 = Math.abs(document.querySelector('#dist-1').value)
    dist2 = Math.abs(document.querySelector('#dist-2').value)
    dist3 = Math.abs(document.querySelector('#dist-3').value)

    soma = Math.max(dist1,dist2,dist3)
    
    resultado = document.querySelector('#resul-total').innerHTML = `Digite as três distâncias: <br>${dist1}<br>
    ${dist2}<br> ${dist3}<br> MAIOR DISTÂNCIA = ${soma}
    `

}
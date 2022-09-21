function calcular(dist,combus,consumo,soma,){
dist = Math.abs (document.querySelector('#distancia').value)
combus = Math.abs (document.querySelector('#gasto').value).toFixed(1)


soma = (dist / combus).toFixed(3)
consumo = document.querySelector('#result-total').innerHTML =`Distância percorrida: ${dist} KM |
Combustível gasto: ${combus} | Consumo médio = ${soma}
`
}
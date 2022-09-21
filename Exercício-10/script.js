function calcular(N1,N2,N3,MRV,result){

    N1 = Math.abs(document.querySelector('#Num').value)
    N2 = Math.abs(document.querySelector('#Num-2').value)
    N3 = Math.abs(document.querySelector('#Num-3').value)

    MRV = Math.min(N1,N2,N3)

    result = document.querySelector('#result-total').innerHTML = `Primeiro valor: ${N1} | Segundo valor: ${N2}
    | Terceiro valor: ${N3} | MENOR = ${MRV}
    `

 }
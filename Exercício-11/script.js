function calcular(n1,n2,soma,result) {
    n1 =Math.abs (document.querySelector('#Nota-1').value)
    n2 =Math.abs (document.querySelector('#Nota-2').value)

    soma = (n1 + n2).toFixed(1);

    if (soma < 60) {
        result = document.querySelector('#result-total').innerHTML += `Digite a primeira nota: ${n1} | Digite a segunda nota: ${n2} <br>
        <br>NOTA FINAL = ${soma}<br><br>REPROVADO <br><br>`
    } else {
        result = document.querySelector('#result-total').innerHTML = `Digite a primeira nota: ${n1} |Digite a segunda nota: ${n2} | NOTA FINAL = ${soma}
        `
    }
    
}
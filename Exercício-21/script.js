let button = document.querySelector("#button");
function calcular(digiteValor) {
    digiteValor = parseInt(document.querySelector("#campo-Valor").value);
    num = "";
    for (let contador = 2; contador <= digiteValor; contador += 2) {
        num += contador + `<br>`;
    }
    let resultado = (document.querySelector(
        "#resul-total"
    ).innerHTML = `Digite o valor de X: ${digiteValor}
    <br>
     ${num}<br>
     `);
}
button.addEventListener("click", calcular);

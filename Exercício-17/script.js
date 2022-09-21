function calcular(multiplo1, multiplo2, soma, result) {
  multiplo1 = Math.abs(document.querySelector("#multi-1").value);
  multiplo2 = Math.abs(document.querySelector("#multi-2").value);

  if (multiplo1 % multiplo2 == 0 || multiplo2 % multiplo1 == 0) {
    soma = "São múltiplos.";
  } else {
    soma = "Não são múltiplos.";
  }

  result = document.querySelector(
    "#resul-total"
  ).innerHTML = `Digite dois números inteiros: ${multiplo1} |
    ${multiplo2} <br><br> ${soma} `;
}

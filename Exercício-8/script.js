function calcular(
  medA,
  medB,
  medC,
  result,
  areaQuadrado,
  areaTriaculo,
  areaTrapezio
) {
  medA = Math.abs(document.querySelector("#medidaA").value);
  medB = Math.abs(document.querySelector("#medidaB").value);
  medC = Math.abs(document.querySelector("#medidaC").value);

  areaQuadrado = (medA * 2).toFixed(4);
  areaTriaculo = ((medA * medB) / 2).toFixed(4);
  areaTrapezio = (((medA + medB) * medC) / 2).toFixed(4);

  result = document.querySelector(
    "#result-Total"
  ).innerHTML = `Digite a medida A: ${medA} | Digite a medida B:
${medB} | Digite a medida C: ${medC}<br><br> ÁREA DO QUADRADO = ${areaQuadrado} | ÁREA DO TRIÂNGULO = ${areaTriaculo}
<br><br>ÁREA DO TRAPÉZIO = ${areaTrapezio}
`;
}

function calcular() {
  //Largura do terreno:
  var Largura = Math.abs(document.querySelector("#lga-t").value).toFixed(1);
  //Comprimento do terreno:
  var comprimento = Math.abs(document.querySelector("#cpt-t").value).toFixed(1);
  //Valor do metro quadrado:
  var valorMetro = Math.abs(document.querySelector("#vl-t").value).toFixed(2);
  // variavel que vai fica responsalve pelo resultado
  var resultadoArea = document.querySelector("#resultado-area");

  //lagura do terreno x comprimento do terreno
  var area = (Largura * comprimento).toFixed(2);
  // Resultado area x valor do metro
  const resultTotal = area * valorMetro;
  // conversão para real
  const testeResult = resultTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  // resultado
  resultadoArea.innerHTML += `Lagura do terreno: ${Largura} | Comprimento do terreno: ${comprimento} |
Valor do metro Quadrado: ${valorMetro}<br><br> Area do Terreno = ${area} |  Preço do Terreno = ${testeResult}<br>
`;
}

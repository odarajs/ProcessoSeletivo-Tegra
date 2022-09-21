function calcular(){ 
//ler a medidas da base
const baseRetangulo = Math.abs(document.querySelector('#bse-r').value).toFixed(1);
//ler as medidas da altura
const alturaRetangulo = Math.abs(document.querySelector('#alt-r').value).toFixed(1);

// informação do calculo
const baseXAltura = (baseRetangulo * alturaRetangulo).toFixed(4);
const perimetro = (baseRetangulo * 2 + alturaRetangulo * 2).toFixed(4);
const diagRetangulo = Math.sqrt((baseRetangulo ** 2) + (alturaRetangulo ** 2)).toFixed(4);

const resultadoTotal = document.querySelector('#resultado-area')

resultadoTotal.innerHTML = `Base do Retângulo: ${baseRetangulo} | Altura do Retângulo: ${alturaRetangulo} |
Área = ${baseXAltura} <br><br> Perimetro = ${perimetro} | Diagonal = ${diagRetangulo}
`
 }
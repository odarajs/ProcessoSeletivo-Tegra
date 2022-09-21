function calcular() {
  // fazer input capturar um nome e idade
  const nomePessoa = document.querySelector("#nome").value;
  const idadePessoa = Math.abs(document.querySelector("#idade").value);
  // fazer input capturar um nome e idade
  const nomePessoa2 = document.querySelector("#nome2").value;
  const idadePessoa2 = Math.abs(document.querySelector("#idade2").value);

  // Informaçãos da soma
  const somar = (idadePessoa + idadePessoa2) / 2;

  const resultadoTotal = document.querySelector("#result-campo");

  resultadoTotal.innerHTML = `Idade média de ${nomePessoa} e ${nomePessoa2} é de ${somar} anos`;
}

let botao = document.querySelector("#button");
function calcular(
  salario,
  percentual,
  aumento,
  novoSalario,
  valorPorcentagem,
  resultado
) {
  salario = Math.abs(document.querySelector("#salario").value);

  if (salario <= 999) {
    percentual = 0.2;
    aumento = salario * percentual;
    novoSalario = aumento + salario;
    valorPorcentagem = "20 %";
  } else if (salario <= 2999) {
    percentual = 0.15;
    aumento = salario * percentual;
    novoSalario = aumento + salario;
    valorPorcentagem = "15 %";
  } else if (salario <= 7999) {
    percentual = 0.1;
    aumento = salario * percentual;
    novoSalario = aumento + salario;
    valorPorcentagem = "10 %";
  } else if (salario >= 8000) {
    percentual = 0.05;
    aumento = salario * percentual;
    novoSalario = aumento + salario;
    valorPorcentagem = "5 %";
  }
  const novoSalario2 = novoSalario.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const aumento2 = aumento.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const salario2 = salario.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  resultado = document.querySelector(
    "#resul-total"
  ).innerHTML = `Digite o salario da pessoa: ${salario2}<br>
    Novo salário = ${novoSalario2}<br> Aumento = ${aumento2}<br> Porcentagem = ${valorPorcentagem}<br>
    `;
}
button.addEventListener("click", calcular);

function teste() {
  //receber nome
  const nomeUser = document.querySelector("#Nome").value;
  const valorHora = Math.abs(
    document.querySelector("#valorHora").value
  ).toFixed(2);
  const horastrab = Math.abs(document.querySelector("#horasTrabalhada").value);
  //calculo
  const somar = valorHora * horastrab;
  const testeResult = somar.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const somartotal = document.querySelector("#result-total");
  somartotal.innerHTML = `Nome: ${nomeUser} | Valor por hora: R$ ${valorHora} <br><br> Horas trabalhadas: ${horastrab} |
O Pagamento para ${nomeUser} deve ser ${testeResult} `;
}

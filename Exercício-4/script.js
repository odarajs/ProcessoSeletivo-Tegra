function calcular() {
  //Preço unitário do produto:
  const precodoProduto = Math.abs(
    document.querySelector("#preco").value
  ).toFixed(2);
  //Quantidade comprada:
  const quantidade = Math.abs(document.querySelector("#quant-comprada").value);
  //Dinheiro recebido:
  const dinheirorecebido = Math.abs(
    document.querySelector("#dinheiro").value
  ).toFixed(2);

  // calcular preço do produto unitario x quantidade comprada
  const somar = dinheirorecebido - precodoProduto * quantidade;
  const testeResult = somar.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const somartotal = document.querySelector("#result-campo");
  somartotal.innerHTML = `Preço unitário do produto: R$ ${precodoProduto} | Quantidade comprada: ${quantidade} 
<br><br>Dinheiro recebido: R$ ${dinheirorecebido} | Troco = ${testeResult}<br>
`;
}

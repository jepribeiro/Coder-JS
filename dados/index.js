// Recupera os dados do localStorage
const dadosOrcamentos = localStorage.getItem("orcamentosSalvos");

// Exibe os dados na tela
if (dadosOrcamentos) {
  const orcamentos = JSON.parse(dadosOrcamentos);
  const tabela = document.getElementById("dados-orcamentos");

  // orçamentos salvos e exibe cada um em uma linha da tabela
  orcamentos.forEach((orcamento) => {
    const linha = document.createElement("tr");

    // Cria as células da tabela
    const salarioCell = document.createElement("td");
    salarioCell.textContent = orcamento.salario;

    const custoFixoCell = document.createElement("td");
    custoFixoCell.textContent = orcamento.custoFixo;

    const horasCell = document.createElement("td");
    horasCell.textContent = orcamento.horasMes;

    // Adiciona as células na linha
    linha.appendChild(salarioCell);
    linha.appendChild(custoFixoCell);
    linha.appendChild(horasCell);

    // Adiciona a linha na tabela
    tabela.appendChild(linha);
  });
} else {
  document.body.innerHTML = "<p>Nenhum orçamento salvo até o momento.</p>";
}

// Criar a classe calculadora que irá criar o objeto
class Calculadora {
  constructor({ salario, custoFixo, horasMes }) {
    this.salario = salario;
    this.custoFixo = custoFixo;
    this.horasMes = horasMes;
  }
}

// Array para salvar os orçamentos
const orcamentoSalvo = [];

// Função para receber os parâmetros
const recebeParametros = () => {
  let salario = Number(document.getElementById("salario").value);
  let custoFixo = Number(document.getElementById("custo-fixo").value);
  let horasMes = Number(document.getElementById("horas-trabalho").value);

  return { salario, custoFixo, horasMes };
};

// Função que calcula valor hora/trabalho e verifica se deseja salvar
const calculaHoraTrabalho = ({ salario, custoFixo, horasMes }) => {
  // Verificar se todos os campos foram preenchidos corretamente
  if (!salario || !custoFixo || !horasMes) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const horaTrabalho = (salario + custoFixo) / horasMes;
  alert(
    `O valor do seu trabalho é de ${horaTrabalho.toFixed(2)} reais por hora.`
  );

  // Verifica se o usuário deseja salvar
  let salvar = document.getElementById("salvar").checked;

  if (salvar) {
    alert("Orçamento salvo com sucesso!");
    let novoOrcamento = new Calculadora({ salario, custoFixo, horasMes });
    orcamentoSalvo.push(novoOrcamento);
  } else {
    alert("Esse orçamento não será salvo.");
  }
};

// Botão para calcular
document.querySelector('input[type="button"]').addEventListener("click", () => {
  const parametros = recebeParametros();
  calculaHoraTrabalho(parametros);
});

// Mostra o array de orçamentos salvos no console
console.log(orcamentoSalvo);

// Função para mostrar dados salvos em uma nova página
document.getElementById("mostrar-dados").addEventListener("click", () => {
  // Converte o array de orçamentos salvos para uma string JSON
  const dadosOrcamentos = JSON.stringify(orcamentoSalvo);

  // Salva os dados no localStorage (método simples para passar dados entre páginas)
  localStorage.setItem("orcamentosSalvos", dadosOrcamentos);

  // Redireciona para a página de exibição dos dados
  window.location.href = "./dados/exibir-dados.html";
});

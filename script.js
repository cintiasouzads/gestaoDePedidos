// script.js

// Elementos
const pedidoForm = document.getElementById('pedidoForm');
const tabelaPedidos = document.getElementById('tabelaPedidos');

// Eventos
pedidoForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o reload da página ao enviar o formulário

  // Capturar dados do formulário
  const nomeCliente = document.getElementById('nomeCliente').value;
  const itemPedido = document.getElementById('itemPedido').value;
  const quantidade = document.getElementById('quantidade').value;

  // Adicionar linha na tabela
  adicionarPedido(nomeCliente, itemPedido, quantidade);

  // Limpar campos do formulário
  pedidoForm.reset();
});

// Funções
function adicionarPedido(cliente, item, quantidade) {
  // Criar uma nova linha
  const novaLinha = document.createElement('tr');

  // Preencher células
  novaLinha.innerHTML = `
    <td>${cliente}</td>
    <td>${item}</td>
    <td>${quantidade}</td>
    <td>Pendente</td>
    <td>
      <button onclick="marcarEntregue(this)">Entregue</button>
      <button onclick="removerPedido(this)">Remover</button>
    </td>
  `;

  // Adicionar linha na tabela
  tabelaPedidos.appendChild(novaLinha);
}

function marcarEntregue(botao) {
  const linha = botao.parentElement.parentElement; // Linha da tabela
  linha.cells[3].textContent = 'Entregue'; // Atualizar o status
}

function removerPedido(botao) {
  const linha = botao.parentElement.parentElement; // Linha da tabela
  tabelaPedidos.removeChild(linha); // Remover a linha
}

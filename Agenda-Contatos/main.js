const form = document.getElementById("agenda");
const corpoTabela = document.querySelector("tbody");

// Array para armazenar os contatos
let contatos = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nomeCadastro = document.getElementById("Nome-cadastro");
    const telCadastro = document.getElementById("Telefone-cadastro");
    // Adiciona o novo contato ao array
    contatos.push({
        nome: nomeCadastro.value,
        telefone: telCadastro.value
    });

    atualizarTabela();

    // Limpar campos
    nomeCadastro.value = '';
    telCadastro.value = '';
});

function atualizarTabela() {
    corpoTabela.innerHTML = '';
    contatos.forEach((contato, index) => {
        let linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${contato.nome}</td>
            <td>${contato.telefone}</td>
            <td><button onclick="removerContato(${index})" class="btn-excluir">✖</button></td>
        `;
        corpoTabela.appendChild(linha);
    });
}

// Função global para remover contato
window.removerContato = function(index) {
    contatos.splice(index, 1);
    atualizarTabela();
}
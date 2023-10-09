// Código JavaScript para gerenciar o sistema

const cadastroForm = document.getElementById("cadastroForm");
const tabelaNotas = document.getElementById("tabelaNotas");

// Função para recuperar os dados armazenados no localStorage
function getStoredData() {
    const data = localStorage.getItem("notas");
    return data ? JSON.parse(data) : [];
}

// Função para salvar os dados no localStorage
function saveData(data) {
    localStorage.setItem("notas", JSON.stringify(data));
}

// Carregar dados salvos do localStorage ao carregar a página
const notas = getStoredData();

// Preencher a tabela com os dados carregados
function fillTable() {
    const tbody = tabelaNotas.querySelector("tbody");
    tbody.innerHTML = "";

    notas.forEach((nota, index) => {
        const newRow = tbody.insertRow();
        newRow.innerHTML = `
            <td>${nota.prefixo}</td>
            <td>${nota.sequencial}</td>
            <td>${nota.parcela}</td>
            <td>${nota.tipo}</td>
            <td>${nota.cliente}</td>
            <td>${nota.valor}</td>
            <td>${nota.saldo}</td>
            <td>${nota.dataEmissao}</td>
            <td>${nota.dataVencimento}</td>
            <td>${nota.codigoCobrador}</td>
            <td>${nota.dataCobranca}</td>
            <td>
                <button onclick="editarNota(this, ${index})">Editar</button>
                <button onclick="excluirNota(${index})">Excluir</button>
            </td>
        `;
    });
}

fillTable(); // Preencher a tabela ao carregar a página

cadastroForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const prefixo = document.getElementById("prefixo").value;
    const sequencial = document.getElementById("sequencial").value;
    const parcela = document.getElementById("parcela").value;
    const tipo = document.getElementById("tipo").value;
    const cliente = document.getElementById("cliente").value;
    const valor = document.getElementById("valor").value;
    const saldo = document.getElementById("saldo").value;
    const dataEmissao = document.getElementById("dataEmissao").value;
    const dataVencimento = document.getElementById("dataVencimento").value;
    const codigoCobrador = document.getElementById("codigoCobrador").value;
    const dataCobranca = document.getElementById("dataCobranca").value;

    // Adicionar os dados da nota ao array de notas
    const novaNota = {
        prefixo,
        sequencial,
        parcela,
        tipo,
        cliente,
        valor,
        saldo,
        dataEmissao,
        dataVencimento,
        codigoCobrador,
        dataCobranca
    };

    notas.push(novaNota);

    // Salvar os dados no localStorage
    saveData(notas);

    // Preencher a tabela com os dados atualizados
    fillTable();

    // Limpar o formulário
    cadastroForm.reset();

    // Incrementar o número sequencial
    document.getElementById("sequencial").value = parseInt(sequencial) + 1;
});

// Função para editar uma nota
function editarNota(button, index) {
    const nota = notas[index];
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName("td");

    document.getElementById("prefixo").value = nota.prefixo;
    document.getElementById("numeroSequencial").value = nota.sequencial;
    document.getElementById("parcela").value = nota.parcela;
    document.getElementById("tipo").value = nota.tipo;
    document.getElementById("cliente").value = nota.cliente;
    document.getElementById("valor").value = nota.valor;
    document.getElementById("saldo").value = nota.saldo;
    document.getElementById("dataEmissao").value = nota.dataEmissao;
    document.getElementById("dataVencimento").value = nota.dataVencimento;
    document.getElementById("codigoCobrador").value = nota.codigoCobrador;
    document.getElementById("dataCobranca").value = nota.dataCobranca;

    document.getElementById("alterar").disabled = false;

    // Remover a linha da tabela
    tabelaNotas.deleteRow(row.rowIndex);

    // Remover a nota do array
    notas.splice(index, 1);

    // Salvar os dados atualizados no localStorage
    saveData(notas);
}

// Função para alterar uma nota
document.getElementById("alterar").addEventListener("click", function () {
    const prefixo = document.getElementById("prefixo").value;
    const sequencial = document.getElementById("numeroSequencial").value;
    const parcela = document.getElementById("parcela").value;
    const tipo = document.getElementById("tipo").value;
    const cliente = document.getElementById("cliente").value;
    const valor = document.getElementById("valor").value;
    const saldo = document.getElementById("saldo").value;
    const dataEmissao = document.getElementById("dataEmissao").value;
    const dataVencimento = document.getElementById("dataVencimento").value;
    const codigoCobrador = document.getElementById("codigoCobrador").value;
    const dataCobranca = document.getElementById("dataCobranca").value;

    // Adicionar os dados da nota atualizada ao array de notas
    const notaAtualizada = {
        prefixo,
        sequencial,
        parcela,
        tipo,
        cliente,
        valor,
        saldo,
        dataEmissao,
        dataVencimento,
        codigoCobrador,
        dataCobranca
    };

    notas.push(notaAtualizada);

    // Salvar os dados atualizados no localStorage
    saveData(notas);

    // Preencher a tabela com os dados atualizados
    fillTable();

    // Limpar o formulário
    cadastroForm.reset();

    // Desabilitar o botão de alterar
    document.getElementById("alterar").disabled = true;
});

// Função para excluir uma nota
function excluirNota(index) {
    // Remover a nota do array
    notas.splice(index, 1);

    // Salvar os dados atualizados no localStorage
    saveData(notas);

    // Preencher a tabela com os dados atualizados
    fillTable();
}
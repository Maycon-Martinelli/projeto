// Selecionar o formulário de cadastro
const cadastroForm = document.getElementById("cadastroForm");
// Selecionar a tabela de vendedores
const tabelaVendedores = document.getElementById("tabelaVendedores");

// Função para recuperar os dados armazenados no localStorage
function getStoredData() {
    const data = localStorage.getItem("vendedores");
    return data ? JSON.parse(data) : [];
}

// Função para salvar os dados no localStorage
function saveData(data) {
    localStorage.setItem("vendedores", JSON.stringify(data));
}

// Carregar dados salvos do localStorage ao carregar a página
const vendedores = getStoredData();

// Preencher a tabela com os dados carregados
function fillTable() {
    const tbody = tabelaVendedores.querySelector("tbody");
    tbody.innerHTML = "";

    vendedores.forEach((vendedor, index) => {
        const newRow = tbody.insertRow();
        newRow.innerHTML = `
            <td>${vendedor.codigoSequencial}</td>
            <td>${vendedor.nome}</td>
            <td>${vendedor.cpf}</td>
            <td>${vendedor.rg}</td>
            <td>${vendedor.sexo}</td>
            <td>${vendedor.endereco}</td>
            <td>${vendedor.bairro}</td>
            <td>${vendedor.cidade}</td>
            <td>${vendedor.uf}</td>
            <td>${vendedor.cep}</td>
            <td>${vendedor.comissao}</td>
            <td>${vendedor.status}</td>
            <td>
                <button onclick="editarVendedor(${index})">Editar</button>
                <button onclick="excluirVendedor(${index})">Excluir</button>
            </td>
        `;
    });
}

fillTable(); // Preencher a tabela ao carregar a página

// Evento de envio do formulário de cadastro
cadastroForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Obter os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const rg = document.getElementById("rg").value;
    const sexo = document.getElementById("sexo").value;
    const endereco = document.getElementById("endereco").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const uf = document.getElementById("uf").value;
    const cep = document.getElementById("cep").value;
    const comissao = document.getElementById("comissao").value;
    const status = document.getElementById("status").value;

    // Gere um código sequencial automaticamente
    const codigoSequencial = vendedores.length + 1;

    // Adicionar os dados do vendedor ao array de vendedores
    const novoVendedor = {
        codigoSequencial,
        nome,
        cpf,
        rg,
        sexo,
        endereco,
        bairro,
        cidade,
        uf,
        cep,
        comissao,
        status
    };

    vendedores.push(novoVendedor);

    // Salvar os dados no localStorage
    saveData(vendedores);

    // Preencher a tabela com os dados atualizados
    fillTable();

    // Limpar o formulário
    cadastroForm.reset();
});

// Função para editar um vendedor
function editarVendedor(index) {
    const vendedor = vendedores[index];
    // Preencher os campos do formulário com os dados do vendedor selecionado
    document.getElementById("sequencial").value = vendedor.codigoSequencial;
    document.getElementById("nome").value = vendedor.nome;
    document.getElementById("cpf").value = vendedor.cpf;
    document.getElementById("rg").value = vendedor.rg;
    document.getElementById("sexo").value = vendedor.sexo;
    document.getElementById("endereco").value = vendedor.endereco;
    document.getElementById("bairro").value = vendedor.bairro;
    document.getElementById("cidade").value = vendedor.cidade;
    document.getElementById("uf").value = vendedor.uf;
    document.getElementById("cep").value = vendedor.cep;
    document.getElementById("comissao").value = vendedor.comissao;
    document.getElementById("status").value = vendedor.status;

    // Habilitar o botão de "Alterar"
    document.getElementById("alterar").disabled = false;

    // Remover o vendedor do array
    vendedores.splice(index, 1);

    // Salvar os dados atualizados no localStorage
    saveData(vendedores);
}

// Função para alterar um vendedor
document.getElementById("alterar").addEventListener("click", function () {
    // Obter os valores dos campos do formulário
    const sequencial = document.getElementById("sequencial").value;
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const rg = document.getElementById("rg").value;
    const sexo = document.getElementById("sexo").value;
    const endereco = document.getElementById("endereco").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const uf = document.getElementById("uf").value;
    const cep = document.getElementById("cep").value;
    const comissao = document.getElementById("comissao").value;
    const status = document.getElementById("status").value;

    // Adicionar os dados do vendedor atualizado ao array de vendedores
    const vendedorAtualizado = {
        codigoSequencial: sequencial, // Preservar o código sequencial original
        nome,
        cpf,
        rg,
        sexo,
        endereco,
        bairro,
        cidade,
        uf,
        cep,
        comissao,
        status
    };

    vendedores.push(vendedorAtualizado);

    // Salvar os dados atualizados no localStorage
    saveData(vendedores);

    // Preencher a tabela com os dados atualizados
    fillTable();

    // Limpar o formulário
    cadastroForm.reset();

    // Desabilitar o botão de "Alterar"
    document.getElementById("alterar").disabled = true;
});

// Função para excluir um vendedor
function excluirVendedor(index) {
    // Remover o vendedor do array
    vendedores.splice(index, 1);

    // Salvar os dados atualizados no localStorage
    saveData(vendedores);

    // Preencher a tabela com os dados atualizados
    fillTable();
}

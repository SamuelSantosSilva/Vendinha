function createDividaTemplate({ id, nome, cpf, descricao, valor, situacao }) {
    return `
            <td>${id}</td>
            <td>${nome}</td>
            <td>${cpf}</td>
            <td>${descricao}</td>
            <td>${valor}</td>
            <td>${situacao}</td>
            <td>
                <button type="button" class="btn btn-success btn-sm" onclick="quitarDivida(${id})">Quitar</button>
                <button type="button" class="btn btn-danger btn-sm" onclick="excluirDivida(${id})">Excluir</button>
            </td>
        `;
}

function listarDividas() {
  //TODO
}

function adicionarDivida(e) {
  //TODO
}

async function quitarDivida(id) {
  //TODO
}

function excluirDivida(id) {
  //TODO
}

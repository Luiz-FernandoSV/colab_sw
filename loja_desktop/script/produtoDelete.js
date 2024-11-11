export default function produtoDelete(id) {
    // Obtém os valores dos campos do formulário
    let nome = document.getElementById('nome').value;
    let descricao = document.getElementById('descricao').value;
    let preco = document.getElementById('preco').value;
    let quantidade = document.getElementById('quantidade').value;
    let marca = document.getElementById('marca').value;
    let validade = document.getElementById('validade').value;

    // Realiza a requisição POST com fetch
    fetch('http://localhost/loja/controller/produto.php', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ID: id,
        })
    })
        .then(res => res.json())
        .then(json => {
            // Sucesso: exibe mensagem de sucesso
            if (json.status == '200') {
                alert('Produto Deletado com sucesso!');
            }
        })
        .catch(error => {
            // Erro: exibe mensagem de erro
            alert('Erro ao salvar o produto: ' + error);
        });
}

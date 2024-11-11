// Função para atualizar parcialmente o produto
const produtoPatch = async (produto) => {
    try {
        const response = await fetch('http://localhost/loja/controller/produto.php', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto) // Envia o produto no corpo da requisição
        });

        // Obtém a resposta JSON do servidor
        const json = await response.json();

        // Sucesso: Exibe mensagem de acordo com a resposta do servidor
        if (json.status === '200') {
            alert('Produto atualizado com sucesso!');
            return true; // Retorna true para indicar sucesso
        } else {
            throw new Error('Erro ao atualizar o produto');
        }
    } catch (error) {
        // Erro: Exibe mensagem de erro
        console.log(produto);
        console.log(error);
        return false; // Retorna false para indicar falha
    }
};

export default produtoPatch;

// Função para criar um novo produto
const produtoPut = async (novoProduto) => {
    try {
      const response = await fetch('http://localhost/loja/controller/produto.php', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProduto)
      });

      const json = await response.json();

      // Sucesso: exibe mensagem de sucesso
      if (json.status === '200') {
        alert('Produto atualizado com sucesso!');
        return true; // Retorna true para indicar sucesso
      }
    } catch (error) {
      // Erro: exibe mensagem de erro
      console.log(novoProduto);
      alert('Erro ao salvar o produto: ' + error);
      console.log(error);
    }
  };

  export default produtoPut;
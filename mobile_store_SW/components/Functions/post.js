// Função para criar um novo produto
  const produtoPost = async (novoProduto) => {
    try {
      const response = await fetch('http://localhost/loja/controller/produto.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProduto)
      });

      const json = await response.json();

      // Sucesso: exibe mensagem de sucesso
      if (json.status === '200') {
        alert('Produto salvo com sucesso!');
        return true
      }
    } catch (error) {
      // Erro: exibe mensagem de erro
      console.log(novoProduto);
      alert('Erro ao salvar o produto: ' + error);
    }
  };

  export default produtoPost;
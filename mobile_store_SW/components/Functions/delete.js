const produtoDelete = async (ID) => {
    try {
      const response = await fetch('http://localhost/loja/controller/produto.php', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"ID": ID})
      });

      const json = await response.json();

      // Sucesso: exibe mensagem de sucesso
      if (json.status === '200') {
        alert('Produto deletado com sucesso!');
      }
    } catch (error) {
      // Erro: exibe mensagem de erro
      console.log(error);
    }
  };

  export default produtoDelete;
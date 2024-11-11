export default function produtoPatch(id) {
    // Obtém o campo selecionado e o valor
    let campo = document.getElementById('campo').value;
    let valor = document.getElementById('valor').value;

    // Verifica se o valor foi preenchido
    if (!valor) {
        alert("Por favor, insira um valor para atualizar.");
        return;
    }

    // Verifica se o campo é uma data e formata
    if (campo === 'Validade') {
        // Tenta converter a string de validade em uma data
        const data = new Date(valor);

        console.log(data);
        // Verifica se a data é válida
        if (isNaN(data.getTime())) {
            alert("Por favor, insira uma data válida.");
            return;
        }

        // Formata a data para YYYY-MM-DD
        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // meses começam do zero
        const dia = String(data.getDate()).padStart(2, '0');
        valor = `${ano}-${mes}-${dia}`; // YYYY-MM-DD
    }


    // Realiza a requisição PUT com fetch
    fetch('http://localhost/loja/controller/produto.php', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ID: id,
            Campo: campo,
            Valor: valor
        })
    })
        .then(res => res.json())
        .then(json => {
            if (json.status === '200') {
                alert('Produto atualizado com sucesso!');
            } else {
                alert('Erro ao atualizar o produto.');
            }
        })
        .catch(error => {
            alert('Erro ao atualizar o produto: ' + error);
        });
}


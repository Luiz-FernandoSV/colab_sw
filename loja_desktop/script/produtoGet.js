import produtoPut from "./produtoPut.js";
import produtoDelete from "./produtoDelete.js";
import produtoPatch from "./produtoPatch.js";

export default function produtoGet() {

    // Selecionando a tabela para exibir os produtos
    let tbl_produtos = document.querySelector('.tbl_produtos');

    // Array pra guardar os produtos
    let ArrayProdutos = [];

    // Fetch dos produtos
    fetch('http://localhost/loja/controller/produto.php')
        .then(response => response.json())
        .then(data => {
            // Preencher o array com os produtos
            ArrayProdutos = data;

            // Iterar sobre os produtos e criar as linhas da tabela
            ArrayProdutos.forEach(produto => {
                // Formatar a data de Validade de YYYY-MM-DD para DD-MM-YYYY
                let dataValidade = new Date(produto.Validade);
                let validadeFormatada = dataValidade.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

                // Criar a linha da tabela
                let linha = document.createElement('tr');
                linha.classList.add('linha_produto');

                linha.innerHTML = `
                    <td>${produto.ID}</td>
                    <td>${produto.Nome}</td>
                    <td>${produto.Descricao}</td>
                    <td>R$${produto.Preco}</td>
                    <td>${produto.qtd}</td>
                    <td>${produto.Marca}</td>
                    <td>${validadeFormatada}</td>    
                    <td>
                        <i class="fas fa-edit" id="editar" title="Alterar" style="cursor: pointer;"></i>
                        <i class="fas fa-pencil-alt" title="Alterar Parcialmente" style="cursor: pointer;"></i>
                        <i class="fas fa-trash" title="Deletar" style="cursor: pointer;"></i>
                    </td>
                `;

                // Adicionar eventos de clique para cada ícone
                let iconeEditar = linha.querySelector('.fa-edit');
                let iconeAlterarParcial = linha.querySelector('.fa-pencil-alt');
                let iconeDeletar = linha.querySelector('.fa-trash');

                var btn_salvar = document.querySelector('.btn_adicionar2');
                var tituloModal = document.getElementById('modalTitle');

                const camposNormais = document.getElementById('campos-normais');
                const camposPatch = document.getElementById('campos-patch');

                iconeEditar.addEventListener('click', () => {
                    const modal = document.getElementById("modalForm");
                    modal.style.display = "block";
                    tituloModal.textContent = "Editar Produto"

                    camposNormais.style.display = 'block';
                    camposPatch.style.display = 'none';

                    btn_salvar.addEventListener('click', function () {
                        produtoPut(produto.ID);
                    })
                });

                iconeAlterarParcial.addEventListener('click', () => {
                    const modal = document.getElementById("modalForm");
                    modal.style.display = "block";
                    tituloModal.textContent = "Editar Produto Parcialmente";

                    // Esconde os campos normais e exibe os campos de PATCH
                    camposNormais.style.display = 'none';
                    camposPatch.style.display = 'block';

                    btn_salvar.addEventListener('click', function () {
                        produtoPatch(produto.ID);
                    })
                });

                iconeDeletar.addEventListener('click', () => {
                    produtoDelete(produto.ID);
                });

                // Adicionar a linha à tabela
                tbl_produtos.appendChild(linha);
            });
        })
        .catch(error => console.error('Erro ao buscar os produtos:', error));
}

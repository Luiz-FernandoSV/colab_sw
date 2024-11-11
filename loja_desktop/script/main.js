import produtoGet from "./produtoGet.js";
import produtoPost from "./produtoPost.js";

// Carrega os produtos assim que a tela carrega
window.onload = produtoGet;

// Adição de produtos
let adicionar = document.querySelector('.btn_adicionar');
let btn_salvar = document.querySelector('.btn_adicionar2');
var tituloModal = document.getElementById('modalTitle');


adicionar.addEventListener('click',function(){
    const modal = document.getElementById("modalForm");
    modal.style.display = "block";
    tituloModal.textContent = "Adicionar Produto"

    btn_salvar.addEventListener('click',function(event){
    
        event.preventDefault();
        produtoPost();
    })
})

// Função para fechar o modal ao clicar no botão de fechar (X)
function fecharModal() {
    const modal = document.getElementById("modalForm");
    modal.style.display = "none";
}

// Fecha o modal ao clicar fora do conteúdo do modal
window.onclick = function (event) {
    const modal = document.getElementById("modalForm");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Fecha o modal quando o usuário clica no botão de fechar (X)
document.querySelector(".close").onclick = fecharModal;


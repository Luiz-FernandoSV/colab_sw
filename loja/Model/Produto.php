<?php
require_once '../controller/DAO/produtoDAO/produtoGET.php';
require_once '../controller/DAO/produtoDAO/produtoPOST.php';
require_once '../controller/DAO/produtoDAO/produtoPUT.php';
require_once '../controller/DAO/produtoDAO/produtoPATCH.php';
require_once '../controller/DAO/produtoDAO/produtoDELETE.php';
class Produto {
    private $conexao;

    public function __construct($conexao) {
        $this->conexao = $conexao;
    }

    public function pegarProdutos() {
        // Implementação do método GET para pegar produtos
        $produtos = pegar_produto($this->conexao);
        echo json_encode($produtos);
    }

    public function inserirProduto() {
        // Implementação do método POST para inserir produto
        $dados = json_decode(file_get_contents('php://input'));
        $status = inserir_produto($dados, $this->conexao);
    
        $resposta = gerarResposta($status, 'inserir');
        fecharConexao($this->conexao);
        echo json_encode($resposta);
    }

    public function alterarProduto() {
        // Implementação do método PUT para alterar produto
        $dados = json_decode(file_get_contents('php://input'));
        $status = alterar_produto($this->conexao, $dados);
    
        $resposta = gerarResposta($status, 'alterar');
        fecharConexao($this->conexao);
        echo json_encode($resposta);
    }

    public function alterarParcialProduto() {
        // Implementação do método PATCH para alteração parcial de produto
        $dados = json_decode(file_get_contents('php://input'));
        $status = alterar_parcial_produto($this->conexao, $dados);
    
        $resposta = gerarResposta($status, 'alterar parcialmente');
        fecharConexao($this->conexao);
        echo json_encode($resposta);
    }

    public function deletarProduto() {
        // Implementação do método DELETE para deletar produto
        $dados = json_decode(file_get_contents('php://input'));
        $status = deletar_produto($this->conexao, $dados->ID);
    
        $resposta = gerarResposta($status, 'deletar');
        fecharConexao($this->conexao);
        echo json_encode($resposta);
    }
}

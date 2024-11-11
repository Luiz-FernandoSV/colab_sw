<?php
require_once '../controller/DAO/clienteDAO/clienteGET.php';
require_once '../controller/DAO/clienteDAO/clientePOST.php';
require_once '../controller/DAO/clienteDAO/clientePUT.php';
require_once '../controller/DAO/clienteDAO/clientePATCH.php';
require_once '../controller/DAO/clienteDAO/clienteDELETE.php';
require_once 'Resposta.php';

class Cliente {
    public $conexao;
    public $req;

    public function __construct($conexao) {
        $this->conexao = $conexao;
        $this->req = $_SERVER;
    }

    // Método GET para buscar clientes
    public function pegarClientes() {
        $clientes = pegar_cliente($this->conexao);
        echo json_encode($clientes);
    }

    // Método POST para inserir um novo cliente
    public function inserirCliente() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = inserir_cliente($dados, $this->conexao);
        
        // Gera a resposta
        $resposta = gerarResposta($status, 'inserir');
        echo json_encode($resposta);

        fecharConexao($this->conexao);
    }

    // Método PUT para atualizar um cliente
    public function alterarCliente() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = alterar_cliente($this->conexao, $dados);
        
        // Gera a resposta
        $resposta = gerarResposta($status, 'alterar');
        echo json_encode($resposta);

        fecharConexao($this->conexao);
    }

    // Método PATCH para atualização parcial de um cliente
    public function alterarParcialCliente() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = alterar_parcial_cliente($this->conexao, $dados);
        
        // Gera a resposta
        $resposta = gerarResposta($status, 'alterar parcialmente');
        echo json_encode($resposta);

        fecharConexao($this->conexao);
    }

    // Método DELETE para deletar um cliente
    public function deletarCliente() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = deletar_clientes($this->conexao, $dados->ID);
        
        // Gera a resposta
        $resposta = gerarResposta($status, 'deletar');
        echo json_encode($resposta);

        fecharConexao($this->conexao);
    }
}

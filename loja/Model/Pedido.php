<?php 
require_once '../controller/DAO/pedidoDAO/pedidoGET.php';
require_once '../controller/DAO/pedidoDAO/pedidoPOST.php';
require_once 'Resposta.php';

class Pedido {
    public $conexao;
    public $req;

    public function __construct($conexao) {
        $this->conexao = $conexao;
        $this->req = $_SERVER;
    }

    // Método para criar um pedido
    public function criarPedido() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = criar_pedido($dados, $this->conexao);

        $resposta = gerarResposta($status, 'inserir');
        echo json_encode($resposta);

        fecharConexao($this->conexao);
    }

    // Método para associar produtos a um pedido
    public function associarProdutos() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = associar_produtos($dados->id_pedido, $dados->id_produto, $dados->qtd, $this->conexao);

        // Gera a resposta
        $resposta = gerarResposta($status, 'associar');
        echo json_encode($resposta);

        fecharConexao($this->conexao);
    }

    // Método para consultar todos os pedidos
    public function consultarPedidos() {
        $pedidos = consultar_pedido($this->conexao);
        echo json_encode($pedidos); // já retorna json_encoded
    }

    // Método para consultar pedidos por ID de cliente
    public function consultarPedidosPorID($id_cliente) {
        $pedidos = consultar_pedidoID($id_cliente, $this->conexao);
        echo json_encode($pedidos); // já retorna json_encoded
    }
}
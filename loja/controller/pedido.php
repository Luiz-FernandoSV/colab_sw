<?php
header("Access-Control-Allow-Origin: *");
require_once './DAO/conexao.php';
require_once '../Model/Resposta.php';
require_once '../Model/Pedido.php';

$conexao = conectar();
$pedido = new Pedido($conexao); // Cria uma instância da classe Pedido

$req = $_SERVER;
$metodo = $req['REQUEST_METHOD'];

switch ($metodo) {
    case 'GET':

        $dados = json_decode(file_get_contents('php://input'));
        // Verifica se há dados recebid
        if (!empty($dados)) {
            // Define o ID a partir dos dados recebidos (POST)
            $id_cliente = intval($dados->id_cliente);
            $pedido->consultarPedidosPorID($id_cliente); // Consulta o pedido específico pelo ID
        } else {
            $pedido->consultarPedidos(); // Consulta todos os pedidos
        }
        break;

    case 'POST':
        $dados = json_decode(file_get_contents('php://input'));

        // Verifica o tipo de operação a ser realizada com base em um campo específico
        switch ($dados->acao) {
            case 'criar_pedido':
                $pedido->criarPedido();
                break;

            case 'associar_produtos':
                $pedido->associarProdutos();
                break;

            default:
                echo json_encode(['erro' => 'Ação POST não suportada']);
                break;
        }
        break;
    default:
        echo json_encode(['erro' => 'Método não suportado']);
        break;
}

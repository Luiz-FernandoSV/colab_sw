<?php
    header("Access-Control-Allow-Origin: *");

    require_once './DAO/conexao.php';
    require_once '../Model/Resposta.php';
    require_once '../Model/Cliente.php';

    $conexao = conectar();
    $cliente = new Cliente($conexao); // Cria uma instância da classe Cliente

    $req = $_SERVER;
    $metodo = $req['REQUEST_METHOD'];

    switch ($metodo) {
        case 'GET':
            $cliente->pegarClientes(); // Chama o método para obter clientes
            break;
    
        case 'POST':
            $cliente->inserirCliente(); // Chama o método para inserir cliente
            break;
    
        case 'PUT':
            $cliente->alterarCliente(); // Chama o método para alterar cliente
            break;
    
        case 'PATCH':
            $cliente->alterarParcialCliente(); // Chama o método para alteração parcial de cliente
            break;
    
        case 'DELETE':
            $cliente->deletarCliente(); // Chama o método para deletar cliente
            break;
    
        default:
            echo json_encode(['erro' => 'Método não suportado']);
            break;
    }
?>

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
require_once './DAO/conexao.php';
require_once '../Model/Resposta.php';
require_once '../Model/Produto.php'; // Inclui a classe Produto

$conexao = conectar();
$produto = new Produto($conexao); // Instancia a classe Produto

$req = $_SERVER;
$metodo = $req['REQUEST_METHOD'];

switch ($metodo) {
    case 'GET':
        $produto->pegarProdutos(); // Chama o método para obter produtos
        break;

    case 'POST':
        $produto->inserirProduto(); // Chama o método para inserir produto
        break;

    case 'PUT':
        $produto->alterarProduto(); // Chama o método para alterar produto
        break;

    case 'PATCH':
        $produto->alterarParcialProduto(); // Chama o método para alteração parcial de produto
        break;

    case 'DELETE':
        $produto->deletarProduto(); // Chama o método para deletar produto
        break;

    default:
        echo json_encode(['erro' => 'Método não suportado']);
        break;
}

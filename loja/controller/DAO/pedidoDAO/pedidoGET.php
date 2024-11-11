<?php 

function consultar_pedido($conexao) {
    $sql = "SELECT * FROM Pedidos";
    $res = mysqli_query($conexao, $sql) or die("Erro ao tentar consultar");

    $pedidos = [];

    while ($registro = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
        $id_pedido = utf8_encode($registro['id_pedido']);
        $id_cliente = utf8_encode($registro['id_cliente']);
        $data = utf8_encode($registro['data']);
        
        $pedido = [
            'id_pedido' => $id_pedido,
            'id_cliente' => $id_cliente,
            'data' => $data,
        ];
        
        array_push($pedidos, $pedido);
    }

    fecharConexao($conexao);
    return $pedidos;
}

function consultar_pedidoID($id_cliente, $conexao) {
    $sql = "SELECT 
            c.ID AS Id_cliente,
            c.nome AS Cliente, 
            pr.ID AS Id_Produto,
            pr.nome AS Produto,
            pp.qtd AS Quantidade
            FROM Clientes c 
            JOIN Pedidos p ON c.ID = p.id_cliente 
            JOIN pedidos_produtos pp ON pp.id_pedido = p.id_pedido 
            JOIN Produtos pr ON pr.id = pp.id_produto 
            WHERE p.id_cliente = $id_cliente";

    $res = mysqli_query($conexao, $sql) or die("Erro ao tentar consultar");

    $pedidos = [];

    while ($registro = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
        $id_cliente = utf8_encode($registro['Id_cliente']);
        $cliente = utf8_encode($registro['Cliente']);
        $id_produto = utf8_encode($registro['Id_Produto']);  // Corrigido aqui
        $produto = utf8_encode($registro['Produto']);
        $quantidade = utf8_encode($registro['Quantidade']);
        
        $pedido = [
            'Id_cliente' => $id_cliente,
            'Cliente' => $cliente,
            'Id_produto' => $id_produto,  // Corrigido aqui
            'Produto' => $produto,
            'Quantidade' => $quantidade,
        ];
        
        array_push($pedidos, $pedido);
    }

    fecharConexao($conexao);
    return $pedidos;
}
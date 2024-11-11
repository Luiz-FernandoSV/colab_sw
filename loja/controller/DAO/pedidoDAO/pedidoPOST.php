<?php

function criar_pedido($dados, $conexao){

    $id_cliente = $dados->id_cliente;
    $data = date('Y-m-d');

    $sql = "INSERT INTO Pedidos (id_cliente,data) VALUES (?,?)";

    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("is", $id_cliente, $data);

    if ($stmt->execute()) {
        // Verifica se alguma linha foi realmente afetada
        if ($stmt->affected_rows > 0) {
            return "Sucesso";
        } else {
            return "Nenhuma alteração feita";
        }
    } else {
        return "Falha: " . $stmt->error;
    }
}

function associar_produtos($id_pedido,$id_produto,$qtd,$conexao){

    $sql = "INSERT INTO pedidos_produtos (id_pedido,id_produto,qtd) VALUES (?,?,?)";

    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("iii", $id_pedido,$id_produto, $qtd);

    if ($stmt->execute()) {
        // Verifica se alguma linha foi realmente afetada
        if ($stmt->affected_rows > 0) {
            return "Sucesso";
        } else {
            return "Nenhuma alteração feita";
        }
    } else {
        return "Falha: " . $stmt->error;
    }

}

<?php
function alterar_produto($conexao, $dados){

    $id = $dados->ID;
    $nome = $dados->Nome;
    $descricao = $dados->Descricao;
    $qtd = $dados->qtd;
    $marca = $dados->Marca;
    $preco = $dados->Preco;
    $validade = $dados->Validade;

    $sql = "UPDATE Produtos SET 
                Nome = ?,
                Descricao = ?,
                qtd = ?,
                Marca = ?,
                Preco = ?,
                Validade = ? 
            WHERE ID = ?";


    
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("ssssssi", $nome, $descricao, $qtd, $marca, $preco, $validade,$id);

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

<?php
function deletar_produto($conexao, $id){
    //SQL DELETE
    $sql = "DELETE FROM Produtos WHERE ID = ?";
    
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("i",$id);

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

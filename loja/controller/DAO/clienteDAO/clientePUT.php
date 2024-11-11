<?php
function alterar_cliente($conexao, $dados){

    $id = $dados->ID;
    $nome = $dados->Nome;
    $endereco = $dados->Endereco;
    $cpf = $dados->CPF;
    $telefone = $dados->Telefone;
    $email = $dados->Email;
    $dataNascimento = $dados->DataNascimento;

    $sql = "UPDATE Clientes SET 
                Nome = ?,
                Endereco = ?,
                CPF = ?,
                Telefone = ?,
                Email = ?,
                DataNascimento = ? 
            WHERE ID = ?";


    
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("ssssssi", $nome, $endereco, $cpf, $telefone, $email, $dataNascimento,$id);

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

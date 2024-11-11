<?php 

    function inserir_cliente($dados,$conexao){

        $nome = $dados->Nome;
        $endereco = $dados->Endereco;
        $cpf = $dados->CPF;
        $telefone = $dados->Telefone;
        $email = $dados->Email;
        $dataNascimento = $dados->DataNascimento;

        $sql = "INSERT INTO Clientes (Nome, Endereco, CPF, Telefone, Email, DataNascimento) VALUES (?,?,?,?,?,?)";

        $stmt = $conexao->prepare($sql);
        $stmt->bind_param("ssssss",$nome,$endereco,$cpf,$telefone,$email,$dataNascimento);

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
<?php

function inserir_produto($dados, $conexao)
{

    $nome = $dados->Nome;
    $descricao = $dados->Descricao;
    $qtd = $dados->qtd;
    $marca = $dados->Marca;
    $preco = $dados->Preco;
    $validade = $dados->Validade;

    $sql = "INSERT INTO Produtos (Nome, Descricao, qtd, Marca, Preco, Validade) VALUES (?,?,?,?,?,?)";

    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("ssssss", $nome, $descricao, $qtd, $marca, $preco, $validade);

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

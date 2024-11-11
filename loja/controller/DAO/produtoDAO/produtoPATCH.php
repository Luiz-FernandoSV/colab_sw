<?php 
function alterar_parcial_produto($conexao, $dados) {
    
    $id = $dados->ID;
    $campo = $dados->Campo;
    $valor = $dados->Valor;

    // Definindo uma lista de campos permitidos para evitar SQL Injection
    $campos_permitidos = ['Nome', 'Descricao', 'qtd', 'Marca', 'Preco', 'Validade']; // Adicione aqui todos os campos que podem ser atualizados

    // Verifica se o campo fornecido está na lista de permitidos
    if (!in_array($campo, $campos_permitidos)) {
        return "Campo inválido";
    }

    // Construção segura da query com o nome do campo definido diretamente no SQL
    $sql = "UPDATE Produtos SET $campo = ? WHERE ID = ?";

    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("si", $valor, $id);

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
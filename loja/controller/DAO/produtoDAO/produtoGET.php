<?php 

function pegar_produto($conexao) {
    // Define o charset da conexão como UTF-8
    mysqli_set_charset($conexao, "utf8");

    $sql = "SELECT * FROM Produtos";
    $res = mysqli_query($conexao, $sql) or die("Erro ao tentar consultar");

    $produtos = [];

    while ($registro = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
        $id = $registro['ID'];
        $nome = $registro['Nome'];
        $descricao = $registro['Descricao'];
        $qtd = $registro['qtd'];
        $marca = $registro['Marca'];
        $preco = $registro['Preco'];
        $validade = $registro['Validade'];
        
        $produto = [
            'ID' => $id,
            'Nome' => $nome,
            'Descricao' => $descricao,
            'qtd' => $qtd,
            'Marca' => $marca,
            'Preco' => $preco,
            'Validade' => $validade
        ];
        
        array_push($produtos, $produto);
    }

    fecharConexao($conexao);
    return $produtos;
}

<?php 

function pegar_cliente($conexao) {
    $sql = "SELECT * FROM Clientes";
    $res = mysqli_query($conexao, $sql) or die("Erro ao tentar consultar");

    $clientes = [];

    while ($registro = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
        $id = utf8_encode($registro['ID']);
        $nome = utf8_encode($registro['Nome']);
        $endereco = utf8_encode($registro['Endereco']);
        $cpf = utf8_encode($registro['CPF']);
        $telefone = utf8_encode($registro['Telefone']);
        $email = utf8_encode($registro['Email']);
        $dataNascimento = utf8_encode($registro['DataNascimento']);
        
        $cliente = [
            'ID' => $id,
            'Nome' => $nome,
            'Endereco' => $endereco,
            'CPF' => $cpf,
            'Telefone' => $telefone,
            'Email' => $email,
            'DataNascimento' => $dataNascimento
        ];
        
        array_push($clientes, $cliente);
    }

    fecharConexao($conexao);
    return $clientes;
}

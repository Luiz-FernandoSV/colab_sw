<?php 
class Resposta {
    public $status; 
    public $msg;

    function __construct($status, $msg) {
        $this->status = $status;
        $this->msg = $msg;
    }
}

function gerarResposta($status, $operacao) {
    $mensagemSucesso = "Sucesso ao $operacao";
    $mensagemFalha = "Falha ao $operacao";

    if ($status == "Sucesso") {
        return new Resposta('200', $mensagemSucesso);
    } else {
        return new Resposta('400', $mensagemFalha);
    }
}

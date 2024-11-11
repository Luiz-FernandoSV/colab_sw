<?php

$user_agent = $_SERVER['HTTP_USER_AGENT'];

// Lista com os Sistemas Operacionais permitidos
$SO_permitidos = ['Windows', 'Android', 'Iphone', 'iPad', 'Linux'];

// Faz uma verificação com todos os sistemas listados
foreach ($SO_permitidos as $SO) {
    // Se encontrado o SO no user_agent
    if (preg_match("/$SO/i", $user_agent)) {
        // Coloca o SO na variável
        $SOuser = $SO;
        break;
    }
}

// Caso o loop termine e não tenha sido determinado o SO do usuário
if (!$SOuser) {
    echo json_encode(['Erro' => 'Sistema inválido']);
    exit;
}

switch ($SOuser) {
    case 'Windows':
        header('Location: http://127.0.0.1:5500/');
        break;
    case "Android":
        header('Location: http://localhost:8081/');
        break;
    case "Iphone":
        header('Location: http://localhost:8081/');
        break;
}

// if($sistemaUser == ""){
//     header('Location: http://localhost/interceptador/pageA.php');
// }else{
//     header('Location: http://localhost/interceptador/pageW.php');
// }
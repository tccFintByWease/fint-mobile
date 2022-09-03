<?php
header('Content-Type: application/json; charset=utf-8');

if (isset($_GET) && !empty($_GET)){
    // http://seu.ip/bdfint/api/login.php?data={%22email%22:%22arthurpercinoto@gmail.com%22,%22password%22:%224002%22}
    $infoUsuario = json_decode($_GET['data']);
}
elseif (isset($_POST) && !empty($_POST)){
    // Problema de CORS na versão WEB
    $infoUsuario = json_decode(json_encode($_POST), FALSE);
} else {
    // Requisição Mobile, onde é passado um arquivo ao invés de uma requisição
    $infoUsuario = json_decode(file_get_contents('php://input'));
}

$nome = $infoUsuario->nome;
$email = $infoUsuario->email;
$password = $infoUsuario->password;

require_once('connect.php');

$checkExistQuery = "SELECT * 
    FROM tblusuario
        WHERE emailusuario = '".$email."'
";

$checkExist = $mysqli->query($checkExistQuery);

$data = $checkExist->fetch_object();

if ($checkExist->num_rows == 1){
    $checkExistReturn = array('success' => false, 'message' => 'Email já cadastrado');

    echo json_encode($checkExistReturn);

    mysqli_close($mysqli);
    
    die();
} 

$query = "INSERT INTO tblusuario (nomeusuario, emailusuario, senhausuario)
            VALUES ('".$nome."','".$email."','".$password."')
        ";

if ($Exist = $mysqli->query($query)){
    $return = array('success' => true, 'id' => $mysqli->insert_id );
} 
else{
    $return = array('success' => false, 'message' => 'Tente novamente mais tarde. (desculpa)');
}
echo json_encode($return);

mysqli_close($mysqli);

?>
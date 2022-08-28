<?php 
header('Content-Type: application/json; charset=utf-8');

if (isset($_GET) && !empty($_GET)){
    // http://192.168.15.47/bdfint/api/login.php?data={%22email%22:%22arthurpercinoto@gmail.com%22,%22password%22:%224002%22}
    $infoUsuario = json_decode($_GET['data']);
}
elseif (isset($_POST) && !empty($_POST)){
    // Problema de CORS na versão WEB
    $infoUsuario = json_decode(json_encode($_POST), FALSE);
} else {
    // Requisição Mobile, onde é passado um arquivo ao invés de uma requisição
    $infoUsuario = json_decode(file_get_contents('php://input'));
}

$email = $infoUsuario->email;
$password = $infoUsuario->password;

require_once('connect.php');

$query = "SELECT * 
            FROM tblusuario
                WHERE emailusuario = '".$email."'
                AND senhausuario = '".$password."'
        ";

$result = $mysqli->query($query);

$data = $result->fetch_object();

if ($result->num_rows == 1){
    $return = array('success' => true, 'id' => $data->idusuario);
} 
else{
    $return = array('success' => false, 'message' => 'Usuário ou senha incorretos');
}
echo json_encode($return);

mysqli_close($mysqli);

?>
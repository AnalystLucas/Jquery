<?php

//Se o Ajax vem como type: GET
// $x = $_GET['x'];
// $y = $_GET['y'];
// echo ($x+$y);

//se o Ajax vem como type: POST
// $x = $_POST['x'];
// $y = $_POST['y'];

// echo ($x+$y);

$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];

echo json_encode($_POST);
<?php
    $a = json_decode(file_get_contents('php://input'),true);
    $res = pow($a['num1'],$a['num2']);
    echo json_encode($res);
?>
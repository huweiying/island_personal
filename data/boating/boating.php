<?php
    header("Content-Type:application-json");
    require_once("../init.php");
    $sql = "SELECT * FROM boating";
    $result = sql_execute($sql);
    echo json_encode($result);

?>
<?php
    header("Content-Type:application/json;charset=utf-8");
    require("../init.php");

    $sql = "SELECT pic_lg FROM index_pic";
    $result = mysqli_query($conn,$sql);
    $lg = mysqli_fetch_all($result);
    $sql = "SELECT pic_sm FROM index_pic";
    $result = mysqli_query($conn,$sql);
    $sm = mysqli_fetch_all($result);
    $output = [
        "lg"=>$lg,
        "sm"=>$sm
    ];
    echo json_encode($output);
?>
<?php
	header("Content-Type:text/plain");
	require_once("../init.php");
	@$uname = $_REQUEST["uname"];
	@$upwd = $_REQUEST["upwd"];
	@$email = $_REQUEST["email"];
	@$phone = $_REQUEST["phone"];
	@$gender = $_REQUEST["gender"];
	$sql = "INSERT INTO user VALUES(NULL,'$uname','$upwd','$email','$phone',NULL,$gender)";
	if(sql_execute($sql)){
		echo "succ";
	}else{
		echo "false";
	}

?>

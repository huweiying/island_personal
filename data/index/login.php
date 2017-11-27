<?php
	header("Content-Type:text/plain");
	session_start();
	require_once("../init.php");
	@$uname = $_REQUEST["uname"];
	@$upwd = $_REQUEST["upwd"];
	$sql = "SELECT * FROM user WHERE uname='$uname' AND upwd='$upwd'";
	if(sql_execute($sql)){
		$_SESSION["uname"] = $uname;
		echo "succ";
	}else{
		echo "err";
	}

?>
<?php
session_start();
header("Content-type:text/plain");
if(@$_SESSION["uname"]){
	echo $_SESSION["uname"];
}else{
	echo "false";
}
	
?>
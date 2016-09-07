<?php

/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/
require "database.php";
require "file.php";

$request = $_GET["request"];
if($request == "fetch"){
	$conn = connect();
	$stmt = $conn->prepare("SELECT * FROM `MarketHighScores` ORDER BY `Score` DESC");
	$stmt->execute();
	$result = $stmt->fetchAll();
	$string = "";
	foreach($result as $res){
		$string .= "<tr><td>$res[Name]</td><td>$res[Score]</td><td>$res[Difficulty]</td></tr>";
	}
	echo $string;
}

if($request == "submit"){
	$name = $_GET["name"];
	$score = $_GET["score"];
	$diff = $_GET["diff"];
	$conn = connect();
	$stmt = $conn->prepare("INSERT INTO `MarketHighScores`(`Name`, `Score`, `Difficulty`) VALUES (:name,:score,:diff)");
	$stmt->bindParam(':name', $name, PDO::PARAM_STR);
	$stmt->bindParam(':score', $score, PDO::PARAM_STR);
	$stmt->bindParam(':diff', $diff, PDO::PARAM_STR);
	$stmt->execute();
}













?>
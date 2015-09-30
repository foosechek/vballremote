
<?php

$name = $_GET["fName"];
$number = $_GET["number"];
$file = fopen("moo.txt","w");
fprintf($file,"%s\t%d",$name, $number);
fclose($file);    

echo "Hello $name , your number is $number";

?>

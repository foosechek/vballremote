<?php
?>
<html>
<body>
testing
<?php
foreach($_POST as $key=>$val) {
echo "Post named $key has the value $val";
}

foreach($_GET as $key=>$val) {
echo "Post named $key has the value $val";
}
?>
</body>
</html>


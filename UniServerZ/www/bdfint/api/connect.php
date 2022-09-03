<?php 
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = new mysqli('localhost', 'root', '12345', 'dbfint');

$mysqli->set_charset('utf8'); ?>
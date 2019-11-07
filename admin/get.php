<?php
require_once(dirname(__FILE__) .  "/../db/database.php");

$connection = db_connect();
$query = "SELECT * FROM dn ORDER BY list_date DESC LIMIT 1";
$result = queryDB($connection, $query);
$arr = pg_fetch_all($result);
echo json_encode($arr[0]);

<?php
require_once(dirname(__FILE__) .  "/../db/database.php");

echo<<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>El Numero de La Lista -- Administracion </title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
HTML;

$connection = db_connect();
if (!$connection) {
    die("Site unable to connect to db ");
}

if ((isset($_POST["update_number"])) && !empty($_POST["update_number"])) {
    $query = "INSERT INTO dn VALUES ({$_POST["update_number"]})";
    $result = queryDB($connection, $query);
}
$query = "SELECT * FROM dn ORDER BY list_date DESC LIMIT 1";
$result = queryDB($connection, $query);

$arr = pg_fetch_all($result);
$list_date = $arr[0]["list_date"];
$list_number = $arr[0]["list_number"];

echo ("Most recent number is $list_number from $list_date.");
if ($list_date < date("Y-m-d")) {
    echo <<<HTML
    <div> Out of date</div>
    <div> Please use the form below to update the number </div>
    <form action="update.php" method="post">
        <div class="form-group">
            <label for="update_number">Update Today's Number</label>
            <input type="number" class="form-control" id="update_number" name="update_number" placeholder="Enter today's number">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

HTML;
} else {
    echo <<<HTML
if this number is mistaken, send me a message with the correct number and I will try to fix it in a timely manner.  Otherwise, wait until you know the number tomorrow.  
    <form action="update.php" method="post">
        <div class="form-group">
            <label for="update_number">Update Today's Number</label>
            <input type="number" class="form-control" id="update_number" name="update_number" placeholder="Enter today's number">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
HTML;
}

echo <<<HTML
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
HTML;

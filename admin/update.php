<?php
require_once(dirname(__FILE__) .  "/../db/database.php");
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

/*
$spanishfmt = new IntlDateFormatter(
    'es_MX',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Tijuana',
    IntlDateFormatter::GREGORIAN
);
*/
$english_list_date = date_format(date_create($list_date), "l, F j Y");
// $spanish_list_date = $spanishfmt->format($list_date);

echo<<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
   <!-- Compiled and minified CSS -->
     
       <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
     
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      
    <title>El Numero de La Lista -- Administracion </title>
    <style>
    body {
    font-size: 200%;
    font-weight: 800;
    }
</style>
</head>
<body class="container">
<div class="card-panel red lighten-4">
Current Number: $list_number <br /> 
Current Date:   $english_list_date.
</div>
HTML;

if ($list_date < date("Y-m-d")) {
    echo <<<HTML
<div class="card-panel deep-purple lighten-4 red-text text-darken-4">
    <div> Out of date</div>
    <div> Please use the form below to update the number </div>
</div>
<div class="card-panel purple lighten-4">
    <form action="update.php" method="post">
        <div class="form-group">
            <label for="update_number">Today's Number</label>
            <input type="number" class="form-control" id="update_number" name="update_number" placeholder="Enter today's number">
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
    </form>
</div>
HTML;
} else {
    echo <<<HTML
<div class="card-panel blue">
    If this number is mistaken, send me a message with the correct number and I will try to fix it in a timely manner.<br />
    Otherwise, wait until you know the number tomorrow.
</div>
<div class="card-panel green">
    Si este numero no es correcto, mandame un mensaje con el numero correcto y voy intentar de cambiarlo prono. <br />
    Por lo demas, esperas hasta manana y cambiarlo cuando sabes el nuevo numero
</div>

<!-- form action="update.php" method="post">
    <div class="form-group">
        <label for="update_number">Update Today's Number</label>
        <input type="number" class="form-control" id="update_number" name="update_number" placeholder="Enter today's number">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form -->
HTML;
}

echo <<<HTML
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
           
</body>
</html>
HTML;

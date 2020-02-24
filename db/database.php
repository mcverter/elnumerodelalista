<?php
function queryDB($connection, $query) {
    $result = pg_query($connection, $query);

    if (!$result) {
        $msg = pg_last_error($connection);
        die("An error occurred. $msg \n");
    }
    return $result;
}

function db_connect() {
    static $connection;

    if(!isset($connection)) {
        $config = parse_ini_file('../config/config.ini');
        $connection = pg_connect("host={$config['servername']} user={$config['username']} password={$config['password']} dbname={$config['dbname']}");
    }


    // If connection was not successful, handle the error
    if($connection === false) {
        // Handle error - notify administrator, log to a file, show an error screen, etc.
        die ("connection failed");
    } else {
#        echo "connection successful it is $connection";
    }
    return $connection;
}



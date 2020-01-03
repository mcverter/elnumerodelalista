<?php
require_once(dirname(__FILE__) .  "/../db/database.php");
require_once(dirname(__FILE__) .  "/mailer.php");

$connection = db_connect();
if (!$connection) {
    die("Site unable to connect to db ");
}

$email_message = "";
$email_subject = "";
$update_number = null;
$tj_date = (new DateTime("now", new DateTimeZone('America/Tijuana') ))->format('Y-m-d');


function isJSONNodeRequest() {
    return ((isset($_SERVER["CONTENT_TYPE"]) && $_SERVER["CONTENT_TYPE"]=== "application/json") ||
        (isset($_SERVER["HTTP_USER_AGENT"]) && (strpos($_SERVER["HTTP_USER_AGENT"], "node-fetch") !== false)));
}

if ((isset($_POST["update_number"])) && !empty($_POST["update_number"])) {
    $update_number = $_POST["update_number"];
    error_log("UPDATE  -- PHP POST, NEW NUMBER, $update_number, Date " . $tj_date);
    $email_subject .= "UPDATE endll POST";
} elseif (isJSONNodeRequest()) {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $update_number = $data["update_number"];
    error_log("UPDATE -- isJSONNodeRequest: NEW NUMBER, $update_number, Date " . $tj_date);
    $email_subject .= "UPDATE endll NODE";
}

if ((isset($update_number)) && !empty($update_number)) {
    error_log("UPDATE -- Number being updated to {$update_number}, Date  $tj_date");
    $email_message .= "UPDATE -- Number being updated to {$update_number} on $tj_date";
    $query = "INSERT INTO dn (list_date, list_number) VALUES ('{$tj_date}', {$update_number}) ON CONFLICT (list_date) DO NOTHING";
    $result = queryDB($connection, $query);
    sendUpdateEmail($email_subject, $email_message);
}

$query = "SELECT * FROM dn ORDER BY list_date DESC LIMIT 1";
$result = queryDB($connection, $query);

$arr = pg_fetch_all($result);
$list_date = $arr[0]["list_date"];
$list_number = $arr[0]["list_number"];

$english_list_date = date_format(date_create($list_date), "l, F j Y");

echo <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- Compiled and minified CSS -->
    <!--Import Google Icon Font for materialize css -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <title>El Numero de La Lista -- Administracion </title>
    <style>
        body {
            font-size: 150%;
            font-weight: 600;
        }
        #input-label {
            font-weight: 800;
            font-size: 200%;
            color: black;
            text-shadow: #550200;
        }
        #update_number {
            background: white;
            border-radius: 22px;
            box-shadow: 0 1px 6px 0 darkgray;
            box-sizing: border-box;
            cursor: text;
            font-size: 150%;
            height: 60px;
            margin: 0 auto;
            max-width: 584px;
            opacity: 1;
            position: relative;
            transition: none;}
    </style>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>


</head>
<body class="container">
<div>El Numero de La Lista -- Administracion </div>

<div class="card-panel red lighten-4">
    <div>Actualmente <a href="http://www.elnumerodelalista.com">elnumerodelalista.com</a> muestra</div>
    <div style="background-color: white; margin: 5px; padding: 5px; border 5px black solid">
        Numero: $list_number <br />
        Fecha: $english_list_date.
    </div>
HTML;

if ($list_date < date($tj_date)) {
    echo <<<HTML

    <div  style="background-color: black; color: red; text-align: center; padding: 10px; margin: 10px; border: 10px red solid;">
        FUERA DE PLAZO <br />
        OUT OF DATE
    </div>
HTML;
}
# end div
echo <<<HTML
</div>
HTML;

if ($list_date < date($tj_date)) {
    echo <<<HTML
<div style="background-color: black; border: 10px black solid">
    <form action="update.php" method="post" id="update_form" style="background-color: white; margin: 10px; padding: 5px; border: 10px black solid">
        <div>
            <input type="number" v-model="update_number" class="form-control" id="update_number" name="update_number" placeholder="Número de hoy">
        </div>
        <div>
        <div style="background-color: black; border: 10px black solid; text-align: center">

    <div onclick="openModal(); return false;" style="background-color: whitesmoke; margin: 10px; padding: 5px">
        <div> ACTUALIZAR EL NUMERO</div>
    </div>
    <div style="background-color: lightgoldenrodyellow; margin: 10px; padding: 5px;">
        <div> UPDATE THE NUMBER </div>
    </div>
</div>
        </div>
    </form>
</div>

<div id="md1" class="modal">
    <div class="modal-content">
    </div>
    <div class="modal-footer">
        <a href="#" class="waves-effect waves-red btn-flat" style="background-color: red; color: white; font-weight: 900; margin: 0 10%;" onclick="closeModal(); return false;">No</a>
        <a href="#" class="waves-effect waves-green btn-flat" style="background-color: green; color: white; font-weight: 900; margin: 0 10%" onclick="submitForm()">Si</a>
    </div>
</div>

<script>
    const {submitForm, openModal, closeModal} =
        (function(){
            const el = document.getElementById("md1");
            const mo = M.Modal.init(el, {dismissible:false, endingTop: "50%"});
            const fo = document.getElementById("update_form");

            function closeModal() {
                mo.close();
            }
            function openModal(){
                let update_number = document.getElementById("update_number").value;
                if (!update_number) {
                    M.toast({html: "Tienes que poner un número. Inténtalo de nuevo."});
                    M.toast({html: "You have to enter a number.  Please try again."});

                    return;
                }
                if (parseInt(update_number) < $list_number) {
                    M.toast({html: `El número de hoy no puede ser menor que el de ayer. Inténtalo de nuevo.`});                    
                    M.toast({html: "Today's number can not be less than yesterday's.  Please try again."});

                    return;
                }
                el.getElementsByClassName("modal-content")[0].innerText =
                    "¿Estás seguro de que el número de hoy es " + update_number + "?";
                mo.open();
            }

            function submitForm() {
                fo.submit();
            }
            return {submitForm, openModal, closeModal};
        })();
</script>   

HTML;
} else {
    echo <<<HTML
<div class="card-panel green lighten-4">
    Si este numero no es correcto, mandame un mensaje con el numero correcto y voy intentar de cambiarlo prono. <br />
    Por lo demas, esperas hasta manana y cambiarlo cuando sabes el nuevo numero
</div>
<div class="card-panel blue lighten-4">
    If this number is mistaken, send me a message with the correct number and I will try to fix it in a timely manner.<br />
    Otherwise, wait until you know the number tomorrow.
</div>
HTML;
}

echo <<<HTML
</body>
</html>
HTML;

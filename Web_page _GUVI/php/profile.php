<?php
    $host = "localhost";
    $username = "formdb_user";
    $db_password = "abc123";
    $dbname = "login_details";
    $con = mysqli_connect($host, $username, $db_password, $dbname);

    if (!$con) {
        die("Connection failed!" . mysqli_connect_error());
    }
    $username_1 = mysqli_real_escape_string($con, $_POST["username"]);

    $sql = "SELECT * FROM login_details WHERE Username = '$username_1'";
    $result=mysqli_query($con,$sql);
    $data = mysqli_fetch_assoc($result);
    $json = json_encode($data);
    echo $json;
?>
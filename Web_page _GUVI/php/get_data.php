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
    $password_1 = mysqli_real_escape_string($con, $_POST["password"]);
    $sql = "SELECT * FROM login_details WHERE Username = '$username_1'";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_assoc($result);
    if (mysqli_num_rows($result) > 0) {
        $password = $row["Password"];
        echo $password;
    }
    else{
        echo "0";
    }
?>

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
    $dob_1 = mysqli_real_escape_string($con, $_POST["dob"]);

    $sql = "SELECT * FROM login_details WHERE Username = '$username_1'";
    $result = mysqli_query($con, $sql);

    if (mysqli_num_rows($result) > 0) {
        echo "Username already exists";
    } else {
        $birthdate = new DateTime($dob_1);
        $currentDate = new DateTime();
        $ageInterval = $birthdate->diff($currentDate);
        $age = $ageInterval->y;
        $sql = "INSERT INTO login_details (Username, Password, email, gender, dob, age) VALUES ('$username_1', '$password_1','','','$dob_1','$age')";
        if (mysqli_query($con, $sql)) {
            echo "Record added successfully";
        } else {
            echo "Error adding record: " . mysqli_error($con);
        }
    }

    mysqli_close($con);
?>

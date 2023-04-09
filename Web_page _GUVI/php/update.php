<?php
$host = "localhost";
$username = "formdb_user";
$db_password = "abc123";
$dbname = "login_details";

// Create connection
$con = mysqli_connect($host, $username, $db_password, $dbname);

// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

$username_1 = mysqli_real_escape_string($con, $_POST["Username"]);
$email_1=mysqli_real_escape_string($con, $_POST["EMail"]);
$dob_1=mysqli_real_escape_string($con, $_POST["DOB"]);
$gender_1=mysqli_real_escape_string($con, $_POST["Gender"]);
$age_1=mysqli_real_escape_string($con, $_POST["Age"]);
$sql="UPDATE login_details SET `email`='$email_1',`gender`='$gender_1',`dob`='$dob_1',`age`='$age_1' WHERE `Username`='$username_1'";
$result = mysqli_query($con,$sql);
?>

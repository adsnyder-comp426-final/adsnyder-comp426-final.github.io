<?php

$server = "";
$user = "adsnyder";
$pass = "ADSunc2022!";
$db = "info";
$newUser = $_POST['user'];
$newpass = $_POST['pass'];
$firstName = $_POST['first'];
$lastName = $_POST['last'];

$conn = new mysqli($server, $user, $pass, $db);

$check_existence = mysqli_query($conn, "SELECT * FROM login_info WHERE user = '$newUser'");
    
if (mysqli_num_rows($check_existence) == 0) { 

    $sql = "INSERT INTO login_info (user, pass, first, last) VALUES ('$newUser', '$newpass', '$firstName', '$lastName', '$swipes')";
    
    if ($conn->query($sql) === TRUE) {
        echo "User created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $sql2 = "INSERT INTO users (user, pass) VALUES ('$newUser', '$newpass')";
    $conn->query($sql2);
}
else {
    print 'Choose a different user';
}

?>
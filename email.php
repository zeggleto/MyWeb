<?php
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $formcontent=" From: $firstname \n Phone: $lastname \n Call Back: $email \n Website: $subject \n Message: $message";
    $recipient = "zeggleto@outlook.com";
    $subject = "Contact Form";
    $mailheader = "From: zeggleto@zacheggleton.com \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    echo "Thank You!";
?>
<?php

    if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['comments']) ){
        $n = $_POST['name']; // HINT: use preg_replace() to filter the data
        $e = $_POST['email'];
        $m = nl2br($_POST['comments']);
        $to = "talmalesa@rknec.edu";	
        $from = $e;
        $subject = 'Contact Form Message';
        $message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>';
        $headers = "From: $from\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\n";
        if( mail($to, $from,$subject, $message, $headers) ){
            echo "success";
        } else {
            echo "The server failed to send the message. Please try again later.";
        }
    }
?>
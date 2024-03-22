<?php

// Replace with your ESP details and logic for sending email
require 'vendor/autoload.php';  // Assuming you use an ESP library

// ... Code to connect to your ESP

// Retrieve data from request (assuming JSON format)
$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
// ... extract other data

// Prepare email message body
$message = "Name: $name \nEmail: $email \n ... ";  // ... add other details

// Send email using your ESP library functions

// ... Send email logic

// Respond to the AJAX request (optional)
echo json_encode(['message' => 'Email sent successfully!']);

?>

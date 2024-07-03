<?php 
// Import PHPMailer classes into the global namespace 
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\SMTP; 
use PHPMailer\PHPMailer\Exception; 
 
// Include library files 
require 'mail/Exception.php';
require 'mail/PHPMailer.php'; 
require 'mail/SMTP.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Create an instance; Pass `true` to enable exceptions 
    $mail = new PHPMailer(true); 
 
    try {
        // Server settings 
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;    //Enable verbose debug output 
        $mail->isSMTP();                            // Set mailer to use SMTP 
        $mail->Host = 'smtp.gmail.com';           // Specify main and backup SMTP servers 
        $mail->SMTPAuth = true;                     // Enable SMTP authentication 
        $mail->Username = 'ajithkumar@newgendigital.com';       // SMTP username 
        $mail->Password = 'uroqpjoiixmnrxxb';         // SMTP password 
        $mail->SMTPSecure = 'ssl';                  // Enable TLS encryption, `ssl` also accepted 
        $mail->Port = 465;                          // TCP port to connect to 
 
        // Sender info 
        $mail->setFrom('hr@gmail.com', 'TSX'); 
        $mail->addReplyTo($email, $name); 
 
        // Add a recipient 
        $mail->addAddress('karthikeyan@newgendigital.com'); 
 
        $mail->addCC('ajithkumar@newgendigital.com'); 
        //$mail->addBCC('bcc@example.com'); 
 
        // Set email format to HTML 
        $mail->isHTML(true); 
 
        // Mail subject 
        $mail->Subject = 'Contact Form Submission from ' . $name; 
 
        // Mail body content 
        $bodyContent = '<h1>Contact Form Submission</h1>'; 
        $bodyContent .= '<p><b>Name:</b> ' . $name . '</p>';
        $bodyContent .= '<p><b>Email:</b> ' . $email . '</p>';
        $bodyContent .= '<p><b>Message:</b> ' . nl2br($message) . '</p>'; 
        $mail->Body    = $bodyContent; 
 
        // Send email 
        if(!$mail->send()) { 
            echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo; 
        } else { 
            echo 'index.html';  // Redirect to a thank you page or any other page
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>

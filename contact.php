<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Eingabewerte des Formulars
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validierung der Eingaben
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // E-Mail Details
        $to = "your-email@example.com"; // Trage hier deine E-Mail Adresse ein
        $subject = "Neue Kontaktanfrage von $name";
        $body = "Name: $name\nE-Mail: $email\nNachricht:\n$message";
        $headers = "From: $email";

        // E-Mail senden
        if (mail($to, $subject, $body, $headers)) {
            echo "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.";
        } else {
            echo "Es gab ein Problem beim Versenden der Nachricht. Bitte versuche es später erneut.";
        }
    } else {
        echo "Bitte fülle alle Felder aus und gib eine gültige E-Mail-Adresse an.";
    }
}
?>

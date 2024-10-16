<?php
$email_headers = "From: $name <$email>\r\n";
$email_headers .= "Reply-To: $email\r\n";
$email_headers .= "X-Mailer: PHP/" . phpversion();

if (mail($recipient, $email_subject, $email_content, $email_headers)) {
    http_response_code(200);
    echo "Danke! Ihre Nachricht wurde gesendet.";
} else {
    http_response_code(500);
    echo "Es gab ein Problem beim Versenden der Nachricht.";
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Daten aus dem Formular abrufen
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Prüfen, ob die Daten korrekt ausgefüllt sind
    if ( empty($name) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL) ) {
        http_response_code(400);
        echo "Bitte füllen Sie alle Felder korrekt aus.";
        exit;
    }

    // Empfänger E-Mail-Adresse
    $recipient = "derbossvonallen851@gmail.com.com";  // Deine E-Mail-Adresse hier einfügen

    // E-Mail Betreff
    $email_subject = "Neue Kontaktanfrage: $subject";

    // E-Mail Inhalt
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Nachricht:\n$message\n";

    // E-Mail Header
    $email_headers = "Von: $name <$email>";

    // E-Mail senden
    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Danke! Ihre Nachricht wurde gesendet.";
    } else {
        http_response_code(500);
        echo "Es gab ein Problem beim Versenden der Nachricht.";
    }
} else {
    http_response_code(403);
    echo "Es gab ein Problem mit Ihrer Anfrage. Versuchen Sie es erneut.";
}

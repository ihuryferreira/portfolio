<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$nome = trim((string)($_POST['nome'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$mensagem = trim((string)($_POST['mensagem'] ?? ''));

if ($nome === '' || $email === '' || $mensagem === '') {
    echo json_encode(['success' => false, 'message' => 'Preencha todos os campos.']);
    exit;
}

$envFile = __DIR__ . '/.env.email';
$vendorFile = __DIR__ . '/vendor/autoload.php';

if (!is_file($envFile)) {
    echo json_encode(['success' => false, 'message' => '.env.email nao encontrado.']);
    exit;
}

if (!is_file($vendorFile)) {
    echo json_encode(['success' => false, 'message' => 'vendor/autoload.php nao encontrado.']);
    exit;
}

$env = [];
foreach (file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
    $line = trim($line);
    if ($line === '' || $line[0] === '#') continue;
    if (!str_contains($line, '=')) continue;
    [$k, $v] = explode('=', $line, 2);
    $env[trim($k)] = trim($v, " \t\n\r\0\x0B\"'");
}

$smtp_host = $env['SMTP_HOST'] ?? '';
$smtp_user = $env['SMTP_USER'] ?? '';
$smtp_pass = $env['SMTP_PASS'] ?? '';
$from_email = $env['FROM_EMAIL'] ?? $smtp_user;
$from_name = $env['FROM_NAME'] ?? 'Portfolio';
$to_email = $env['TO_EMAIL'] ?? $smtp_user;

if (!$smtp_host || !$smtp_user || !$smtp_pass) {
    echo json_encode(['success' => false, 'message' => 'Configuracao SMTP incompleta.']);
    exit;
}

require $vendorFile;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $smtp_host;
    $mail->SMTPAuth = true;
    $mail->Username = $smtp_user;
    $mail->Password = $smtp_pass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = (int)($env['SMTP_PORT'] ?? 587);
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);

    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true,
        ]
    ];

    $mail->Sender = $from_email;
    $mail->setFrom($from_email, $from_name);
    $mail->addAddress($to_email);
    $mail->addReplyTo($email, $nome);
    $mail->Subject = 'Contato do Portfolio - ' . $nome;
    $mail->Body = '<h2>Nova mensagem</h2><p><strong>Nome:</strong> ' . htmlspecialchars($nome) . '</p><p><strong>E-mail:</strong> ' . htmlspecialchars($email) . '</p><p><strong>Mensagem:</strong></p><p>' . nl2br(htmlspecialchars($mensagem)) . '</p>';
    $mail->AltBody = "Nome: $nome\nE-mail: $email\n\nMensagem:\n$mensagem";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso!']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Erro: ' . $mail->ErrorInfo]);
}

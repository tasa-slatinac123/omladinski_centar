<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    try {
        // Povezivanje sa bazom
        $pdo = new PDO('mysql:host=localhost;dbname=omladinska_zajednica', 'root', 'lozinka');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Provera unosa
        $stmt = $pdo->prepare('SELECT * FROM korisnici WHERE username = :username');
        $stmt->execute(['username' => $username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            $_SESSION['loggedin'] = true;
            $_SESSION['username'] = $username;
            header('Location: index.html');
            exit;
        } else {
            $error_message = 'Neispravno korisničko ime ili lozinka. Pokušajte ponovo.';
        }
    } catch (PDOException $e) {
        die('Greška pri povezivanju sa bazom: ' . $e->getMessage());
    }
}
?>
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Preuzimanje podataka iz forme
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $confirm_password = trim($_POST['confirm_password']);

    // Provera da li se lozinke poklapaju
    if ($password !== $confirm_password) {
        die('Lozinke se ne poklapaju. Pokušajte ponovo.');
    }

    // Povezivanje sa bazom podataka
    try {
        $pdo = new PDO('mysql:host=localhost;dbname=omladinska_zajednica', 'root', 'lozinka');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Provera da li korisničko ime već postoji
        $stmt = $pdo->prepare('SELECT * FROM korisnici WHERE username = :username');
        $stmt->execute(['username' => $username]);
        if ($stmt->fetch()) {
            die('Korisničko ime je već zauzeto. Izaberite drugo.');
        }

        // Šifrovanje lozinke
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Unos korisnika u bazu podataka
        $stmt = $pdo->prepare('INSERT INTO korisnici (username, password) VALUES (:username, :password)');
        $stmt->execute(['username' => $username, 'password' => $hashed_password]);

        echo 'Registracija je uspešna. Možete se prijaviti.';
    } catch (PDOException $e) {
        die('Greška pri povezivanju sa bazom: ' . $e->getMessage());
    }
}
?>
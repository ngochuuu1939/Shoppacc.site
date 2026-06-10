<?php
$host = 'localhost'; // hoặc tên host của bạn
$db   = 'shopaccngochuu';   // tên database
$user = 'root';        // tên đăng nhập database
$pass = '';            // mật khẩu
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    die("Kết nối DB thất bại: " . $e->getMessage());
}
?>

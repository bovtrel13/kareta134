<?php
require __DIR__ . '/vendor/autoload.php';

use Google\Client;
use Google\Service\Sheets;

define('SPREADSHEET_ID', ''); // ID вашей Google-таблицы
define('RANGE', 'Лист1!A:E'); // Диапазон, куда записывать данные

// Подключение к API
function getClient() {
    $client = new Client();
    $client->setApplicationName('Google Sheets API PHP');
    $client->setScopes([Sheets::SPREADSHEETS]);
    $client->setAuthConfig('credentials.json'); // Файл с ключом
    $client->setAccessType('offline');
    return $client;
}

// Получение данных из формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = [
        $_POST['arrFilter_5'] ?? '',
        $_POST['arrFilter_6'] ?? '',
        $_POST['arrFilter_7'] ?? '',
        $_POST['arrFilter_9'] ?? '',
        date('Y-m-d H:i:s')
    ];

    $client = getClient();
    $service = new Sheets($client);

    $body = new Sheets\ValueRange([
        'values' => [$data]
    ]);

    $params = ['valueInputOption' => 'RAW'];
    $service->spreadsheets_values->append(SPREADSHEET_ID, RANGE, $body, $params);

    echo "Данные успешно записаны!";
} else {
    echo "Ошибка отправки формы.";
}
?>
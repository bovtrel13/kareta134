<?php
// Настройки
$token = "7143072366:AAE1ZHD98q6M8_9eDAiexy6SVA50IkhQ2qU"; // Ваш токен
$chat_id = "-4716004446"; // Ваш chat_id

// Получаем данные из формы (предполагаем, что они передаются методом POST)
$message = "Новая заявка:\n";

// Собираем все параметры формы
foreach ($_POST as $key => $value) {
    // Добавляем каждый параметр в сообщение
    $message .= "<b>$key</b>: $value\n";  // Форматируем данные как HTML, используя теги <b> для выделения
}

// Формируем URL для отправки сообщения
$url = "https://api.telegram.org/bot{$token}/sendMessage";

// Данные для отправки
$data = [
    'chat_id' => $chat_id,
    'text' => $message,
    'parse_mode' => 'HTML'  // Устанавливаем HTML-разметку
];

// Инициализация cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Выполнение запроса
$result = curl_exec($ch);

// Проверка на ошибки
if ($result === false) {
    echo 'Ошибка cURL: ' . curl_error($ch);
} else {
    echo 'Ответ от Telegram API: ' . $result;  // Ответ от Telegram API
}

curl_close($ch);
?>

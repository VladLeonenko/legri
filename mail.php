<?php

//получение данных
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $cart = $_POST['finallyGoods'];
    $payment = $_POST['payment'];
    $delivery = $_POST['delivery'];
    $surname = $_POST['surname'];
    $city = $_POST['city'];
    $street = $_POST['street'];
    $house = $_POST['house'];
    $flat = $_POST['flat'];



//$surname - $_POST['surname'];

//Обработка полученных данных

    $name = htmlspecialchars($name);  //преобразование символов в сущности
    $email = htmlspecialchars($email);
    $tel = htmlspecialchars($tel);
    $cart = htmlspecialchars($cart);
    $payment = htmlspecialchars($payment);
    $delivery = htmlspecialchars($delivery);
    $surname = htmlspecialchars($surname);
    $city = htmlspecialchars($city);
    $street = htmlspecialchars($street);
    $house = htmlspecialchars($house);
    $flat = htmlspecialchars($flat);


    $name = urldecode($name);  //декодирование URL
    $email = urldecode($email);
    $tel = urldecode($tel);
    $cart = urldecode($cart);
    $payment = urldecode($payment);
    $delivery = urldecode($delivery);
    $surname = urldecode($surname);
    $city = urldecode($city);
    $street = urldecode($street);
    $house = urldecode($house);
    $flat = urldecode($flat);



    $name = trim($name);  // удаление пробельных символов с обеих сторон
    $surname = trim($surname);
    $cart = trim($cart);
    $email = trim($email);
    $tel = trim($tel);
    $payment = trim($payment);
    $delivery = trim($delivery);
    
    $city = trim($city);
    $street = trim($street);
    $house = trim($house);
    $flat = trim($flat);

//Отправляем данные на почту

$to = "info@legri.store";
$subject = "Новое письмо с сайта";
$headers .= "From: От кого письмо <no-reply@primecoder.ru>\r\n";
$msg = "Письмо успешно отправлено!";
 


if(mail($to,$subject,
        "Имя:  $name\r\n
        Фамилия:  $surname\n
        Товар:  $cart\n
        Город:  $city\n
        Улица:  $street\n
        Дом:  $house\n
        Квартира:  $flat\n
        Почта:  $email\r\n
        Доставка:  $delivery\r\n
        Оплата:  $payment\r\n
        Телефон:  $tel",
        $headers)
        )

        header("Location: success.html");
  
        

?>
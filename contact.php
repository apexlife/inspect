<?php

	$txtname = trim($_POST['txtname']);
	$txtphone = trim($_POST['txtphone']);


	// от кого
	$fromMail = 'info@inspect.ru';
	$fromName = 'INSPECT';
	

	// Сюда введите Ваш email
	$emailTo = 'osipov.tem@yandex.ru';

	$subject = 'Форма обратной связи';
	$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
	$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
	$headers .= "From: ". $fromName ."";

	// тело письма
	$body = "Получено письмо с сайта INSPECT \n\nИмя: $txtname\nТелефон: $txtphone";
	$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );


	echo 'ok';

?>

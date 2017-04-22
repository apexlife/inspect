<?php

	$txtname = trim($_POST['txtname']);
	$txtphone = trim($_POST['txtphone']);
	$txtemail = trim($_POST['email']);


	// от кого
	$fromMail = 'info@inspect.ru';
	$fromName = 'INSPECT';
	

	// —юда введите ¬аш email
	$emailTo = 'osipov.tem@yandex.ru';

	$subject = 'Inspect raschet';
	$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
	$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
	$headers .= "From: ". $fromName ."";

	// тело письма
	$body = "INSPECT \n\nName: $txtname\nPhone: $txtphone\nE-mail: $txtemail";
	$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );


	echo 'ok';

?>

<?php

if (!empty($_POST['name']) AND !empty($_POST['Email']) AND !empty($_POST['tel'])) {

	$headres = 'From: Олемка\r\n'.
			   'Replay-To: bykp@bk.ru\r\n'.
			   'X-Mailer: PHP/'. phpversion();

	$mail = 'bykp@bk.ru';

	$theme = 'Новое сообщение';

	$letter = 'Данные сообщения:\r\n';
	$letter .= 'Имя: '.$_POST['name'].'\r\n';
	$letter .= 'Email: '.$_POST['Email'].'\r\n';
	$letter .= 'Телефон: '.$_POST['tel'].'\r\n';
	$letter .= 'Сообщение: '.$_POST['textarea'].'\r\n';

	if (mail($mail, $theme, $letter, $headres)) {
		echo 'Сообщение отправлено!';
	} else {
		echo 'Error!';
	}

} else {
	echo 'Заполните поля!';
}

?>
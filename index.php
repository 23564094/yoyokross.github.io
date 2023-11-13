<?php
require 'IP2Location.php';

$loc = new IP2Location('databases/IP-COUNTRY.BIN', IP2Location::FILE_IO);
$record = $loc->lookup($_SERVER['REMOTE_ADDR'], IP2Location::ALL);

if($record == 'BD') {
	header('HTTP/1.1 301 Moved Permanently');
	header('Location: https://yoyokross.github.io/bn');
	exit;
}

if($record == 'PK') {
	header('HTTP/1.1 301 Moved Permanently');
	header('Location: https://yoyokross.github.io/pk');
	exit;
}

if($record == 'IN') {
	header('HTTP/1.1 301 Moved Permanently');
	header('Location: https://yoyokross.github.io/en');
	exit;
}

?>

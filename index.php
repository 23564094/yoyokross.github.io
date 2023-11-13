<?php
require_once('geoplugin.class.php');
$geoplugin = new geoPlugin();
$geoplugin->locate();
// create a variable for the country code
$var_country_code = $geoplugin->countryCode;
// redirect based on country code:
if ($var_country_code == "PK") {
   header('Location: https://yoyokross.github.io/pk');
}
else if ($var_country_code == "BD") {
   header('Location: https://yoyokross.github.io/bn');
} else {
   header('Location: https://yoyokross.github.io/en');
}
?>

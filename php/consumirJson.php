<?php

//Load the file
$contents = file_get_contents('../Json/JsonD1.json');

//Decode the JSON data into a PHP array.
$contentsDecoded = json_decode($contents, true);

echo json_encode($contentsDecoded);

?>
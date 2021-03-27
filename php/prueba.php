<?php

$contents = file_get_contents('../Json/JsonD1.json');
//Decode the JSON data into a PHP array.
$contentsDecoded = json_decode($contents, true);
//echo $contentsDecoded[0]['descierto'];
$lote=[];
$lote2=[];
for($i=0;$i<44;$i++){
    if($contentsDecoded[$i]['descierto'] == 1){
        array_push($lote,$contentsDecoded[$i]);
    }
    if($contentsDecoded[$i]['descierto'] == 2){
        array_push($lote2,$contentsDecoded[$i]);
    }
}

/*
echo('<pre>');
var_dump($lote);
echo('</pre>');
echo('<pre>');
var_dump($lote2);
echo('</pre>');
*/
?>
<?php


if(!isset($_POST['des'])){    
    echo json_encode('Nada por aqui :)');
}
else{
    $lote=[];
    $lote2=[];
    $contents = file_get_contents('../Json/JsonD1.json');
    //Decode the JSON data into a PHP array.
    $contentsDecoded = json_decode($contents, true);

    if($_POST['des']=='1'){
        for($i=0;$i<44;$i++){
            if($contentsDecoded[$i]['desierto'] == 1){
                array_push($lote,$contentsDecoded[$i]);
            }
        }
        echo json_encode($lote);
    }
    if($_POST['des']=='2'){
        for($i=0;$i<44;$i++){
            if($contentsDecoded[$i]['desierto'] == 2){
                array_push($lote2,$contentsDecoded[$i]);
            }
        }
        echo json_encode($lote2);
    }
    if($_POST['des']!='2' &&  $_POST['des']!='1' ){
        echo json_encode('lote inexistente');
    }
    
    /*
    //Load the file
$contents = file_get_contents('../Json/JsonD1.json');
//Decode the JSON data into a PHP array.
$contentsDecoded = json_decode($contents, true);
echo json_encode($contentsDecoded);*/
}
?>
<?php


if(isset($_POST['des'])){
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
}
if(isset($_POST['lote'])){
    $data = json_decode($_POST['lote'],true);
    $contents = file_get_contents('../Json/JsonD1.json');
    //Decode the JSON data into a PHP array.
    $contentsDecodedA = json_decode($contents, true);
    for($i=0;$i<44;$i++){
        if($contentsDecodedA[$i]['id'] == $data['id']){
            $contentsDecodedA[$i]['estatus']=$data['estatus'];
        }
    }
    $js =json_encode($contentsDecodedA);
    file_put_contents('../Json/JsonD1.json',$js);

}
?>
/*var xhr = new XMLHttpRequest();
xhr.open('POST','../php/consumirJson.php');
xhr.onload=function(){
    if(xhr.status==200){
        var js = xhr.responseText;
        console.log(js);
    }else{
        console.log(xhr.status);
    }
}
xhr.send();
console.log('hey');*/

var url = '../php/consumirJson.php';
var formu = new FormData();
formu.append("des",2);

fetch(url, {
  method: 'POST', // or 'PUT'
  body: formu, // data can be `string` or {object}
}).then(res => res.json())
.then(data => console.log(data))
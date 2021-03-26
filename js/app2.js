/*var xhr = new XMLHttpRequest();
xhr.open('GET','../php/consumirJson.php');
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
var data = {descierto: 1};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
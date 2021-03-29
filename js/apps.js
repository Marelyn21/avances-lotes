/**
 * Funcion consume PHP y guarda en local storage para consumir despues 
 */

document.addEventListener('DOMContentLoaded',function (event) {
    var url = '../php/consumirJson.php';
    var formu = new FormData();
    formu.append("des",1);
     fetch(url, {
    method: 'POST', // or 'PUT'
    body: formu, // data can be `string` or {object}
    }).then(res => res.json())
    .then(data => {
        localStorage.setItem('Lotes',JSON.stringify(data));
    })
    .catch(error => {
        console.error(error);
    });    
})
/**
 * obtenemos todos los Lotes con sus respectivo ID
 */
var a = document.getElementById('Lote8');
var b = document.getElementById('Lote7');
var c = document.getElementById('Lote_9');
var d = document.getElementById('Lote13');
var e = document.getElementById('Lote_15');
var f = document.getElementById('Lote_16');
var g = document.getElementById('Lote_17');
var h = document.getElementById('Lote19');
var i = document.getElementById('Lote18');
var j = document.getElementById('Lote20');
var k = document.getElementById('Lote24');
var l = document.getElementById('Lote25');
var m = document.getElementById('Lote26');
var n = document.getElementById('Lote21');
var o = document.getElementById('Lote23');
var p = document.getElementById('Lote22');
var q = document.getElementById('Lote_12');
var r = document.getElementById('Lote11');
var s = document.getElementById('Lote10');
var t = document.getElementById('Lote_14');
var u = document.getElementById('Lote7');
var v = document.getElementById('Lote_6');
var w = document.getElementById('Lote5');
var x = document.getElementById('Lote1');
var y = document.getElementById('Lote2');
var z = document.getElementById('Lote4');
var a1 = document.getElementById('Lote3');
/**
 * Agregamos el un event listener 
 */
a.addEventListener("click",funcModal,false);
b.addEventListener("click",funcModal,false);
c.addEventListener("click",funcModal,false);
d.addEventListener("click",funcModal,false);
e.addEventListener("click",funcModal,false);
f.addEventListener("click",funcModal,false);
g.addEventListener("click",funcModal,false);
h.addEventListener("click",funcModal,false);
i.addEventListener("click",funcModal,false);
j.addEventListener("click",funcModal,false);
k.addEventListener("click",funcModal,false);
l.addEventListener("click",funcModal,false);
m.addEventListener("click",funcModal,false);
n.addEventListener("click",funcModal,false);
o.addEventListener("click",funcModal,false);
p.addEventListener("click",funcModal,false);
q.addEventListener("click",funcModal,false);
r.addEventListener("click",funcModal,false);
s.addEventListener("click",funcModal,false);
t.addEventListener("click",funcModal,false);
u.addEventListener("click",funcModal,false);
v.addEventListener("click",funcModal,false);
w.addEventListener("click",funcModal,false);
x.addEventListener("click",funcModal,false);
y.addEventListener("click",funcModal,false);
z.addEventListener("click",funcModal,false);
a1.addEventListener("click",funcModal,false);
function funcModal(){
    let lotes;
    /* obtener el id del div donde se inserta la informacion */
    var mod = document.getElementById('contenido');
    /** revisa si tiene contenido alguno si lo tiene lo elimina */
    if(mod.hasChildNodes){
        mod.innerHTML='';
    }
    /**
     * obtenemos el id del objeto que invoca la funcion 
     */
    var atri =this.getAttribute('id');
    lotes=JSON.parse(localStorage.getItem('Lotes'));
    let slote;
    lotes.forEach(lote => {
        if(lote['id']==atri){
            slote = lote;
        }        
    });
    console.log(slote);
    console.log(slote['id']);
    console.log(parseInt(slote['area'],10));
    console.log(slote['estatus']);
    console.log(slote['desierto']);
    console.log(calcA(parseInt(slote['area'],10),10));
    /**
     * Creacion de un elemento en el cual pondremos la informacion del modal
     */
    const contenido = document.createElement('div');
    /**
     * agregamos la plantilla del modal 
     */
    contenido.innerHTML=`
    <div class="modalContenido">
    <spawn>Diste click en el ${atri}</spawn>
    <p><center><h5>Cluster Marbella "Primera parte"</h5></center><br><center><h5>Precio: </h5> $70,000<br><h5>Información: </h5> ¡No lo pienses más y <b>aparta tu terreno</b> 
                 con solo <b>$5,000</b>!. Somos una gran empresa dedicada al manejo y selección del 
                    mejor lugar para tu vivienda, confía en GrupoViv y no dejes pasar esta oportunidad.<br><br>
                    <li>Compra ahora en Marzo y paga
                        la primera mensualidad hasta Abril.</li>
                    <li>25% de descuento para propiedades pagadas de contado</li>
                    <li>Aplica para todas las operaciones a crédito realizadas en Marzo 2021</li><br>
                    </p>
                    <div class="paypal">
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_xclick">
                            <input type="hidden" name="business" value="marelynortiz0398@gmail.com">
                            <input type="hidden" name="lc" value="MX">
                            <input type="hidden" name="item_name" value="Terreno 1">
                            <input type="hidden" name="item_number" value="1">
                            <input type="hidden" name="amount" value="70000.00">
                            <input type="hidden" name="currency_code" value="MXN">
                            <input type="hidden" name="button_subtype" value="services">
                            <input type="hidden" name="no_note" value="0">
                            <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
                            <center><input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea."></center>
                            <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
                            </form>
                    </div>  
    </div>
    `;
    /**
     * Agregamos el contenido al nodo seleccionado anteriro mente 
     */
    mod.appendChild(contenido);
}
function calcA(ar,precio) {
    return ar*precio;
}
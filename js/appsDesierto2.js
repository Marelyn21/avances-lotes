/**
 * obtenemos todos los Lotes con sus respectivo ID
 */
var a = document.getElementById('Lote27');
var b = document.getElementById('Lote28');
var c = document.getElementById('Lote29');
var d = document.getElementById('Lote30');
var e = document.getElementById('Lote31');
var f = document.getElementById('Lote32');
var g = document.getElementById('Lote33');
var h = document.getElementById('Lote34');
var i = document.getElementById('Lote35');
var j = document.getElementById('Lote36');
var k = document.getElementById('Lote37');
var l = document.getElementById('Lote38');
var m = document.getElementById('Lote39');
var n = document.getElementById('Lote40');
var o = document.getElementById('Lote41');
var p = document.getElementById('Lote42');
var q = document.getElementById('Lote43');
var r = document.getElementById('Lote44');
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

function funcModal(){
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
    <p><center><h5>Cluster Marbella "Segunda parte"</h5></center><br><center><h5>Precio: </h5> $70,000<br><h5>Información: </h5> ¡No lo pienses más y <b>aparta tu terreno</b> 
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
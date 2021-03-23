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
    </div>
    `;
    /**
     * Agregamos el contenido al nodo seleccionado anteriro mente 
     */
    mod.appendChild(contenido);
}
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
    </div>
    `;
    /**
     * Agregamos el contenido al nodo seleccionado anteriro mente 
     */
    mod.appendChild(contenido);
}
/**
 * Funcion consume PHP y guarda en local storage para consumir despues 
 */

function actuali(){ 
    
    let lotes;
    let loteM
      /**
     * obtenemos el id del objeto que invoca la funcion 
     */
    
    var atri =document.getElementById('NumLote').getAttribute('value');   
    lotes=JSON.parse(localStorage.getItem('Lotes'));    
    lotes.forEach(lote => {
        if(lote['id']==atri){
            lote['estatus']=2;
            loteM=lote;
        }        
    });
    var d = JSON.stringify(loteM);
    var url = '../php/consumirJson.php';
    var formu = new FormData();
    formu.append("lote",d);
     fetch(url, {
    method: 'POST', // or 'PUT'
    body: formu, // data can be `string` or {object}
    }).then(res => console.log(res.json()))
    .catch(error => {
        console.error(error);
    }); 
}
document.addEventListener('DOMContentLoaded',function (event) {
    let bod = document.getElementsByTagName("body").item(0);
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
    
var l = document.getElementsByClassName('lote');
for(var i=0;i<l.length;i++){
    l[i].addEventListener('click',funcModal,false);
}
/**
 * obtenemos todos los Lotes con sus respectivo ID
 */
 
 lotes=JSON.parse(localStorage.getItem('Lotes'));
 var id=0;
 let a;
for(var i=0;i<44;i++){
    if(lotes[i]['estatus']==2){
        id =lotes[i]['id'];        
        if(document.getElementById(id)){
            a=document.getElementById(id);
            console.log(a.childNodes[1]);
            a.childNodes[1].classList.add('vendido');
        }
        
        /*
        console.log(l[i].getAttribute('id'));  
             
        a.childNodes[1].classList.add('vendido');
/*        
    a.childNodes[1].classList.add('vendido');*/
    }
}

});
 


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
    var btnup = document.getElementById('btncomprar');
    btnup.addEventListener('click',actuali,false);
    
    /**
     * Creacion de un elemento en el cual pondremos la informacion del modal
     */
    const contenido = document.createElement('div');
    /**
     * agregamos la plantilla del modal 
     */
    contenido.innerHTML=`
    <div class="modalContenido">
    <p><center><h2>Cluster Marbella "Desierto ${slote['desierto']}" </h2></center><br><center><h3 id='NumLote' value='${slote['id']}'><b>${slote['id']}</b></h3></center><br><center>Información: </center><br><b>Área:</b> ${parseInt(slote['area'],10)}<br>
    <b>Precio total:</b> ${calcA(parseInt(slote['area'],10),10)}<br><br>  ¡No lo pienses más y <b>aparta tu terreno</b> 
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
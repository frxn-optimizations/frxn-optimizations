console.log("FRXN cargado");


const buttons = document.querySelectorAll(".buy");


const popup = document.getElementById("popup");

const planName = document.getElementById("plan-name");

const message = document.getElementById("message");

const close = document.getElementById("close");



buttons.forEach(button => {


button.addEventListener("click", function(){


let plan = this.getAttribute("data-plan");


popup.style.display = "flex";


planName.innerHTML = plan;



if(plan === "FREE"){


message.innerHTML = `

Has seleccionado FRXN FREE.

<br><br>

Para recibir tu optimización:

<br>

✅ Entrá al Discord.

<br>

✅ Abrí un ticket.

<br>

✅ Solicitá tu optimización gratuita.

<br><br>

No olvides enviar la información solicitada.

`;


}else{


message.innerHTML = `


Método de pago:

<br><br>


💳 Mercado Pago


<br><br>


Alias:

<br>


<b>OPTIFRXN</b>


<br><br>


Después de realizar el pago:

<br><br>


1) Guardá el comprobante.

<br>

2) Entrá al Discord.

<br>

3) Abrí un ticket.

<br>

4) Mandá la captura del pago.

<br>

5) Recibirás tu optimización.


`;


}



});


});





close.addEventListener("click",()=>{


popup.style.display="none";


});





popup.addEventListener("click",function(e){


if(e.target === popup){


popup.style.display="none";


}


});

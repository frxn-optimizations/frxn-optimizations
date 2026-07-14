const botones = document.querySelectorAll(".buy-btn");

const popup = document.getElementById("popup");
const selectedPlan = document.getElementById("selectedPlan");
const paymentText = document.getElementById("paymentText");

const close = document.getElementById("close");


botones.forEach(boton => {

    boton.addEventListener("click", function(){

        let plan = this.dataset.plan;

        popup.style.display = "flex";

        selectedPlan.innerHTML = plan;


        if(plan === "FREE"){

            paymentText.innerHTML = `
            Solicitaste FRXN FREE.

            <br><br>

            Unite al Discord,
            abrí un ticket y recibí tu optimización gratuita.
            `;

        }else{


            paymentText.innerHTML = `

            Método de pago:

            <br><br>

            💳 Mercado Pago

            <br><br>

            Alias:

            <br>

            <b>OPTIFRXN</b>

            <br><br>

            Después del pago:

            <br>
            ✅ Guardá el comprobante.
            <br>
            ✅ Entrá al Discord.
            <br>
            ✅ Abrí un ticket.
            <br>
            ✅ Mandá la captura.

            `;

        }


    });


});


close.onclick = function(){

popup.style.display="none";

};




document.addEventListener("mousemove",function(e){

const cursor=document.querySelector(".cursor");

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

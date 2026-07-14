console.log("FRXN Script cargado correctamente");


document.addEventListener("DOMContentLoaded", function(){

    const botones = document.querySelectorAll(".buy-btn");

    const popup = document.getElementById("popup");
    const selectedPlan = document.getElementById("selectedPlan");
    const paymentText = document.getElementById("paymentText");
    const close = document.getElementById("close");


    botones.forEach(function(boton){

        boton.addEventListener("click", function(){

            const plan = this.getAttribute("data-plan");


            popup.style.display = "flex";

            selectedPlan.innerHTML = plan;


            if(plan === "FREE"){

                paymentText.innerHTML = `
                Solicitud de FRXN FREE

                <br><br>

                Unite al Discord de FRXN,
                abrí un ticket y solicitá tu optimización gratuita.

                `;

            } else {

                paymentText.innerHTML = `

                Método de pago:

                <br><br>

                💳 Mercado Pago

                <br><br>

                Alias:

                <br>

                <strong>OPTIFRXN</strong>

                <br><br>

                Después de pagar:

                <br>
                1. Guardá el comprobante.
                <br>
                2. Entrá al Discord.
                <br>
                3. Abrí un ticket.
                <br>
                4. Mandá la captura del pago.
                <br>
                5. Recibirás tu optimización.

                `;

            }

        });

    });



    if(close){

        close.addEventListener("click", function(){

            popup.style.display = "none";

        });

    }


});

function openBuy(plan){

    let popup = document.getElementById("popup");
    let selectedPlan = document.getElementById("selectedPlan");
    let paymentText = document.getElementById("paymentText");


    popup.style.display = "flex";

    selectedPlan.innerHTML = plan;


    if(plan === "FREE"){

        paymentText.innerHTML = `
        Solicitaste la optimización FREE.

        <br><br>

        Para recibirla:

        <br>
        ✅ Entrá al Discord de FRXN.
        <br>
        ✅ Abrí un ticket.
        <br>
        ✅ Mandá la información solicitada.

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

        Después del pago:

        <br>
        1) Guardá el comprobante.
        <br>
        2) Entrá al Discord.
        <br>
        3) Abrí un ticket.
        <br>
        4) Mandá la captura.
        <br>
        5) Recibirás tu optimización.

        `;

    }

}



function closeBuy(){

    document.getElementById("popup").style.display = "none";

}



document.addEventListener("mousemove", function(e){

    let cursor = document.querySelector(".cursor");

    if(cursor){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

});

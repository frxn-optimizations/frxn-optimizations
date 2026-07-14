const popup = document.getElementById("popup");
const selectedPlan = document.getElementById("selectedPlan");
const paymentText = document.getElementById("paymentText");


function openBuy(plan){

    popup.style.display = "flex";

    selectedPlan.innerHTML = plan;


    if(plan === "FREE"){

        paymentText.innerHTML = `
        Has seleccionado la optimización FREE.

        <br><br>

        Para recibirla:

        <br>
        1. Entrá al Discord de FRXN.
        <br>
        2. Abrí un ticket.
        <br>
        3. Solicitala y seguí los pasos indicados.

        `;

    }else{


        paymentText.innerHTML = `

        Método de pago:

        <br><br>

        💳 Mercado Pago

        <br>

        Alias:

        <br>

        <b>OPTIFRXN</b>


        <br><br>


        Después de realizar el pago:

        <br>

        1. Guardá el comprobante.

        <br>

        2. Unite al Discord.

        <br>

        3. Abrí un ticket.

        <br>

        4. Mandá la captura del pago.

        <br>

        5. Recibirás tu optimización.

        `;


    }


}




function closeBuy(){

    popup.style.display = "none";

}




const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX - 11 + "px";

    cursor.style.top = e.clientY - 11 + "px";

});

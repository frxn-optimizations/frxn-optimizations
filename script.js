const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e=>{
    cursor.style.left = e.clientX - 12 + "px";
    cursor.style.top = e.clientY - 12 + "px";
});


document.querySelectorAll(".card,.plan").forEach(card=>{
    card.addEventListener("mouseenter",()=>{
        card.style.boxShadow="0 0 30px #008cff";
    });

    card.addEventListener("mouseleave",()=>{
        card.style.boxShadow="none";
    });
});
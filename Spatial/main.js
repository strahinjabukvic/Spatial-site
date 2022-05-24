const hamburger = document.querySelector(".hamburger");
const lista = document.querySelector("ul");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    lista.classList.toggle("active");
})

const nav_menu = document.querySelector(".nav-menu");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () =>{
    menu.classList.toggle("active");
    nav_menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    menu.classList.remove("active");
    nav_menu.classList.remove("active");
}))
const normal=document.getElementById("normal")
normal.addEventListener("click",()=>{
    document.querySelector(".body").style.background="white";
})
const sombre=document.getElementById("sombre")
sombre.addEventListener("click",()=>{
    document.querySelector(".body").style.background="black";
})
const Menu=document.querySelector(".Menu")
const row_menu=document.querySelector(".row-menu")
Menu.addEventListener("click",()=>{
    row_menu.style.display="block"
    row_menu.classList.toggle("open");
    row_menu.classList.toggle("close");
})

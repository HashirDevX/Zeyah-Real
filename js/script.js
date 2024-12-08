let navbar = document.querySelector(".dropdown_menu");
let icon = document.querySelector(".fa-bars");

icon.addEventListener("click",()=>{
    navbar.classList.toggle("hello")
    icon.classList.toggle("fa-xmark")
})


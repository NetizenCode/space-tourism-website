const ham = document.getElementById("ham");
const iconClose = document.getElementById("icon-close");
const nav = document.getElementById("nav-bar-menu-mobile");

ham.addEventListener ("click", ()=>{
    nav.style.display = "block";
});
iconClose.addEventListener ("click", ()=>{
    nav.style.display = "none";
});
// navBarMenuMobile.addEventListener("click", (e)=>{
//     if (e.target === navBarMenuMobile) {
//         navBarMenuMobile.classList.remove("active")
//     }
// })
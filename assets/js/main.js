$('document').ready(() =>{

});
let show = true;
const menuSection = document.querySelector('.navbar-menu-mobile');
const menuToggle = document.querySelector('.menutoggler');

menuToggle.addEventListener('click', ()=> {
  
    document.body.style.overflow = show ? "hidden": "initial";
    menuToggle.classList.toggle('open', show)
    menuSection.classList.toggle('on', show)
    show = !show;

})
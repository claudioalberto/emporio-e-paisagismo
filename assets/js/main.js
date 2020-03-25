$('document').ready(() =>{
    $('#arranjos-slider').slick({
        dots : true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1368,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 1, 
                    slidesToShow: 1
                }
            }
        ]
    });
    let screen = window.matchMedia("(max-width: 500px)");
    if(screen.matches){
        $('.slider-projetos-personalizados').slick({
            dots: true,
            arrows: false,
            slidesToScroll: 1,
            slidesToShow: 1
        });
    }
    
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
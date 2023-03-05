// Button Scroll Top
const btnScrollTop = document.getElementById("js-btn-scroll-top");
if(btnScrollTop){
    btnScrollTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    })
}
// Add class active to menu button
const menuButton = document.getElementById('js-menu-button');
if(menuButton){
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('is-active'); // add the CSS configuration on this button
        document.documentElement.classList.toggle('menu-opened');
    })
}

// Menu Header Change >20 scroll
const header = document.getElementById("js-header");
function fixedMenu() {
  if (window.pageYOffset > 50) {
    header.classList.add("changeHeight");
  } else {
    header.classList.remove("changeHeight");
  }
}
document.addEventListener("scroll", fixedMenu);


const progressSlide = document.querySelector('.js-progress'); // get progress bar

// Script for Swipper Slide
var swiper = new Swiper(".slide-principal", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false // autoplay nao para de funcionar
    },
    effect: 'fade',
    pagination: {
      el: ".slide-principal .swiper-pagination",
      clickable: true,
      type: "fraction",
    },
    on: { // get some elements from swiper slide
        init : function () { // when slide starts
          progressSlide.classList.remove('animate');
          progressSlide.classList.remove('active');
          progressSlide.classList.add('animate'); // faz a barra crescer
          progressSlide.classList.add('active'); // da opacidade
        }, 
        slideChangeTransitionStart : function (){ // when the transition start
          progressSlide.classList.remove('animate');
          progressSlide.classList.remove('active');
          progressSlide.classList.add('active');
        }, 
        slideChangeTransitionEnd : function (){ // when the transiction finish
          progressSlide.classList.add('animate'); // um apos o outro - nao pode adicionar junto
        }
      }
});
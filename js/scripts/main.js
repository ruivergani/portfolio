// Script Data AOS Animation
AOS.init();

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

// Script for Hero Slide
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

// Script for Cases Slide
"use strict";
var slide_image_cases = new Swiper(".slide-image-cases",{
  slidesPerView: 'auto',
  spaceBetween: 32,
  loop: !0,
  speed: 800,
  centeredSlides: !0,
  watchSlidesVisibility: !0,
  watchSlidesProgress: !0,
  preventClicks: true,
  pagination: {
    el: ".s-cases .ctrl-slide .pagination-box-cases",
    clickable: false,
  },
  navigation: {
    nextEl: ".s-cases .ctrl-slide .btn-next",
    prevEl: ".s-cases .ctrl-slide .btn-prev"
  }
});

var slide_about_case = new Swiper(".slide-about-case",{
  spaceBetween: 0,
  direction: "vertical",
  speed: 800,
  simulateTouch: !1,
  pagination: {
    el: ".s-cases .ctrl-slide .page-fraction",
    type: "fraction",
    clickable: false,
  },
  navigation: {
    nextEl: ".s-cases .ctrl-slide .btn-next",
    prevEl: ".s-cases .ctrl-slide .btn-prev"
  },
  thumbs: {
    swiper: slide_image_cases
  }
});
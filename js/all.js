"use strict";var btnScrollTop=document.getElementById("js-btn-scroll-top"),menuButton=(btnScrollTop&&btnScrollTop.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.getElementById("js-menu-button")),header=(menuButton&&menuButton.addEventListener("click",function(){menuButton.classList.toggle("is-active"),document.documentElement.classList.toggle("menu-opened")}),document.getElementById("js-header"));function fixedMenu(){50<window.pageYOffset?header.classList.add("changeHeight"):header.classList.remove("changeHeight")}document.addEventListener("scroll",fixedMenu);var swiper=new Swiper(".slide-principal",{autoplay:{delay:5e3,disableOnInteraction:!1},effect:"fade",pagination:{el:".slide-principal .swiper-pagination",clickable:!0,type:"fraction"},breakpoints:{}});
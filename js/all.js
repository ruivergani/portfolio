"use strict";gsap.registerPlugin(ScrollTrigger),function(){var e=window,t=!1;e.addEventListener("scroll",function(){t||(t=!0,requestAnimationFrame(function(){e.dispatchEvent(new CustomEvent("optimizedScroll")),t=!1}))})}(),window.addEventListener("optimizedScroll",function(){document.querySelectorAll(".rotate").forEach(function(e){e.style.transform="rotate(-"+window.pageYOffset/2+"deg)"})}),AOS.init();var btnScrollTop=document.getElementById("js-btn-scroll-top"),menuButton=(btnScrollTop&&btnScrollTop.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.getElementById("js-menu-button")),header=(menuButton&&menuButton.addEventListener("click",function(){menuButton.classList.toggle("is-active"),document.documentElement.classList.toggle("menu-opened")}),document.getElementById("js-header"));function fixedMenu(){50<window.pageYOffset?header.classList.add("changeHeight"):header.classList.remove("changeHeight")}document.addEventListener("scroll",fixedMenu);var progressSlide=document.querySelector(".js-progress"),swiper=new Swiper(".slide-principal",{autoplay:{delay:5e3,disableOnInteraction:!1},effect:"fade",pagination:{el:".slide-principal .swiper-pagination",clickable:!0,type:"fraction"},on:{init:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("animate"),progressSlide.classList.add("active")},slideChangeTransitionStart:function(){progressSlide.classList.remove("animate"),progressSlide.classList.remove("active"),progressSlide.classList.add("active")},slideChangeTransitionEnd:function(){progressSlide.classList.add("animate")}}}),slide_image_cases=new Swiper(".slide-image-cases",{slidesPerView:"auto",spaceBetween:32,loop:!0,speed:800,centeredSlides:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,preventClicks:!0,pagination:{el:".s-cases .ctrl-slide .pagination-box-cases",clickable:!1},navigation:{nextEl:".s-cases .ctrl-slide .btn-next",prevEl:".s-cases .ctrl-slide .btn-prev"}}),slide_about_case=new Swiper(".slide-about-case",{spaceBetween:0,direction:"vertical",speed:800,simulateTouch:!1,pagination:{el:".s-cases .ctrl-slide .page-fraction",type:"fraction",clickable:!1},navigation:{nextEl:".s-cases .ctrl-slide .btn-next",prevEl:".s-cases .ctrl-slide .btn-prev"},thumbs:{swiper:slide_image_cases}});
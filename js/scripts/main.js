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

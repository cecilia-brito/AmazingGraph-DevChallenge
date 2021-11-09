const buttonMobile = document.getElementById('mobile-button');
const nav = document.getElementById('navigation');

function menuMobile(){

    nav.classList.toggle('active');

}

buttonMobile.addEventListener('click', menuMobile);
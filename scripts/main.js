const btnMobile = document.getElementById('mobile-button');

function menuMobile(){
    const nav = document.getElementById('navigation');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', menuMobile);
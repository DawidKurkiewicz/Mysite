if(localStorage.getItem('isCookiesAccepted', 'true')){
    document.getElementById('cookies').classList.add('cookies__hidden');
}

function buttonClick(){
    localStorage.setItem('isCookiesAccepted', 'true');
    document.getElementById('cookies').classList.add('cookies__hidden');
 }

document.getElementById('cookies__button').addEventListener('click', buttonClick);

const menu = document.querySelector('.nav');
const menuButton = document.querySelector('.button-box');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('nav--active');
})
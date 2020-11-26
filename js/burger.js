let burgerMenu = document.querySelector('.burger_menu')
let nav = document.querySelector('.nav')

function showBurger() {
    if (document.documentElement.clientWidth < 768) {
        burgerMenu.style.display = "block";
        nav.style.display = "none";
    }
}
showBurger()

function burger(){
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 200vw 200vw';
    links.style.display = 'flex';
    quit.style.display = 'inline';
}

function quit(){
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 32px 32px';
    links.style.display = 'none';
    quit.style.display = 'none';
}
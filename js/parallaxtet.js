let text = document.getElementById('discountText')
window.addEventListener('scroll', function () {
    var value = window.scrollY
    if (scrollY > 500){
        text.style.left = value * 0.5 / 2 + 'px';
    }
    if (document.documentElement.clientWidth < 768) {
        text.style.left = value * 0.2 / 2 - 150 + 'px';
    }
})
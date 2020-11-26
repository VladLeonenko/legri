if (window.matchMedia("(max-width: 424px)").matches) {
        if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
}
let up = document.querySelector('.up');
up.addEventListener('click', function () {
window.scrollTo(0,0);
});
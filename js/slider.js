


document.body.onclick = function (event) {
    event = event || window.event;

    if (event.target.classList.contains('goods-min')){
        let allDivs = document.querySelectorAll('.img-min div')
        for (let i = 0; i < allDivs.length; i++){
            allDivs[i].classList.remove('active')
        }
        event.target.parentElement.classList.add('active')


        document.querySelector('.goods-max').src = event.target.src;
    }
}
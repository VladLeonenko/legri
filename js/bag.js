let cart = {}; //моя корзина
let totalitems = 0;


$('document').ready(function(){
    checkArticle()
    loadGoods();

    checkCart()
    checkItem()
    showMiniCart()

})

function loadGoods(){
   $.getJSON('goods.json', function (data) {
        let out = ''
        function showGoodsDetails() {
            for (let key in data){
                let article = JSON.parse(localStorage.getItem('article'))

                // console.log(article)

                if (key == article){

                    out+='<div class="container" id="detailsContainer">'
                    out+='<div class="mainSlider">'

                    out+='<div class="img-max" >'
                    out+='<img class="goods-max" src="'+data[key].img+'" alt="Увеличеное изображение '+data[key]['name']+'">'
                    out+='</div>'

                    out+='<div class="img-min">'
                    out+='<div>'
                    out+='<img class="goods-min" src="'+data[key].img+'" alt="'+data[key]['name']+'">'
                    out+='</div>'

                    out+='<div>'
                    out+='<img class="goods-min" src="'+data[key].img2+'" alt="'+data[key]['name']+'">'
                    out+='</div>'

                    out+='<div class="active">'
                    out+='<img class="goods-min" src="'+data[key].img3+'" alt="'+data[key]['name']+'">'
                    out+='</div>'

                    out+='</div>'
                    out+='</div>'

                    out+='<div class="goodsDescription">'
                    
                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='<p>'+data[key]['description']+'</p>'
                    out+='<p>Цена: '+data[key]['cost']+" руб"+'</p>'
                    out+='<h5>'+data[key]['delivery']+'</h5>'
                    
                    out+='<h2>Характеристики товара:</h2>'
                    out+='<p>Артикул: '+data[key]['article']+'</p>'
                    out+='<p>Упаковка: '+data[key]['pack']+'</p>'
                    out+='<p>Размер упаковки: '+data[key]['packSize']+'</p>'
                    out+='<p>Материал: '+data[key]['material']+'</p>'
                    out+='<p>Вес: '+data[key]['weight']+'</p>'


                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'


                    out+='</div>'
                }
                $('.goodsDetails').html(out)

            }
        }
        showGoodsDetails()
       let maxImg = document.querySelector('.goods-max')
            if (maxImg != null){
                $(function loop() {
                    $(".goods-max").okzoom({
                        width: 180, // Ширина лупы
                        height: 180, // Высота лупы
                        background: "transparent", // Фон лупы
                        border: "1px solid black", // Обводка лупы
                        shadow: "0 0 4px #000" // Тень лупы
                    });

                });
            }


    })




    //Загружаю товары на страницу

    //Товары со скидкой(на главной) 112
    $.getJSON('goods.json', function (data) {
        let out = ''
        function showSaleGoods (){
            for (let key in data){

                    if (Math.floor(Math.random()*1.15)){
                        out+='<div class="single-goods" data-price="'+data[key].cost+'" id="'+data[key]['article']+'">'

                        out+= '<div class="goodsCart" >'
                        out+='<img src="'+data[key].img4+'" alt="">'

                        out+='</div>'


                        out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'
                        out+='<h3>'+data[key]['name']+'</h3>'
                        out+='</a>'

                        out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                        out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                        out+='</div>'


                    }
                $('.goods').html(out)
            }
         }
               showSaleGoods ()
    })

    /*Украшения для праздника*/
    $.getJSON('goods.json', function (data) {
        let out = ''
        function showDecoration (){
            for (let key in data){

                if (key > 7000 && key < 8000){
                    out+='<div class="single-goods" data-price="'+data[key].cost+'" id="'+data[key]['article']+'">'

                    out+= '<div class="goodsCart">'
                    out+='<img src="'+data[key].img4+'" alt="">'

                    out+='</div>'


                    out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'
                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='</a>'

                    out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'
                }
                $('.decoration').html(out)
            }
        }
        showDecoration ()
    })

    /*Товары ТОП (которые нужно продать скорее)*/
    $.getJSON('goods.json', function (data) {
        let out = ''
        function showTopGoods (){
            for (let key in data){
                    if (key < 3000){
                        out+='<div class="single-goods" data-price="'+data[key].cost+'" id="'+data[key]['article']+'">'

                        out+= '<div class="goodsCart">'
                        out+='<img src="'+data[key].img4+'" alt="">'

                        out+='</div>'


                        out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'
                        out+='<h3>'+data[key]['name']+'</h3>'
                        out+='</a>'

                        out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                        out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                        out+='</div>'
                    }
                $('#topGoods').html(out)
            }
         }
        showTopGoods ()
    })



    //Мужские товары 113
    $.getJSON('goods.json', function (data) {
        let out = ''
        function showMansGoods() {
            for (let key in data){

                if (key > 1000 && key < 2000){
                    out+='<div class="single-goods" data-price="'+data[key].cost+'" id="'+data[key]['article']+'">'

                    out+= '<div class="goodsCart">'
                    out+='<img src="'+data[key].img4+'" alt="">'
                    out+='</div>'

                    out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'
                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='</a>'

                    out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'
                }
                if (key > 4000 && key < 4050){
                    out+='<div class="single-goods" data-price="'+data[key].cost+'">'

                    out+= '<div class="goodsCart">'
                    out+='<img src="'+data[key].img+'" alt="">'
                    out+='</div>'

                    out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'
                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='</a>'

                    out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'
                }
                $('.manGoodsPage').html(out)
            }
        }
        showMansGoods()
    })

    /*Детские товары*/
    $.getJSON('goods.json', function (data) {
        let out = ''
        function showKidsGoods() {
            for (let key in data){
                if (key > 2000 && key < 3000){
                    out+='<div class="single-goods" data-price="'+data[key].cost+'" id="'+data[key]['article']+'">'

                    out+= '<div class="goodsCart">'
                    out+='<img src="'+data[key].img4+'" alt="">'
                    out+='</div>'

                    out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'
                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='</a>'

                    out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'
                }
                $('.kidsGoods').html(out)
            }
        }
        showKidsGoods()
    })

/*Для коллег*/
    $.getJSON('goods.json', function (data) {
        let out = ''
        function showCorporateGoods() {
            for (let key in data){
                if (key > 3000 && key < 4000){
                    out+='<div class="single-goods" data-price="'+data[key].cost+'" id="'+data[key]['article']+'">'

                    out+= '<div class="goodsCart">'
                    out+='<img src="'+data[key].img4+'" alt="">'
                    out+='</div>'

                    out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'
                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='</a>'

                    out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'
                }
                $('.corporateGoods').html(out)
            }
        }
        showCorporateGoods()
    })

    /*Подарочные наборы*/
    $.getJSON('goods.json', function (data) {
        let out = ''
        function showGiftSet() {
            for (let key in data){
                if (key > 4000 && key < 5000){
                    out+='<div class="single-goods" data-price="'+data[key].cost+'" id="'+data[key]['article']+'">'

                    out+= '<div class="goodsCart">'
                    out+='<img src="'+data[key].img4+'" alt="">'
                    out+='</div>'

                    out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'
                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='</a>'

                    out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'
                }
                $('.giftSet').html(out)
            }
        }
        showGiftSet()
    })

    /*Съедобные наборы*/

    $.getJSON('goods.json', function (data) {
        let out = ''
        function showEdibleGifts() {
            for (let key in data){
                if (key > 6000 && key < 7000){
                    out+='<div class="single-goods" data-price="'+data[key].cost+'" id="'+data[key]['article']+'">'

                    out+= '<div class="goodsCart">'
                    out+='<img src="'+data[key].img4+'" alt="">'
                    out+='</div>'

                    out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'
                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='</a>'

                    out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'
                }
                $('.edibleGifts').html(out)
            }
        }
        showEdibleGifts()
    })

/*Ёлки*/

    $.getJSON('goods.json', function (data) {
        let out = ''
        function showChristmasTrees() {
            for (let key in data){
                if (key > 5000 && key < 6000){
                    out+='<div class="single-goods" data-price="'+data[key].cost+'" id="'+data[key]['article']+'">'

                    out+= '<div class="goodsCart">'
                    out+='<img src="'+data[key].img4+'" alt="">'
                    out+='</div>'

                    out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'
                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='</a>'

                    out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'
                }
                $('.christmasTrees').html(out)
            }
        }
        showChristmasTrees()
    })
    
    /*Интеръер*/

    $.getJSON('goods.json', function (data) {
        let out = ''
        function showHomeInterior() {
            for (let key in data){
                if (key > 8000 && key < 9000){
                    out+='<div class="single-goods" data-price="'+data[key].cost+'" id="'+data[key]['article']+'">'

                    out+= '<div class="goodsCart">'
                    out+='<img src="'+data[key].img4+'" alt="">'
                    out+='</div>'

                    out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'
                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='</a>'

                    out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'
                }
                $('.homeInterior').html(out)
            }
        }
        showHomeInterior()
    })
 /*Упаковка*/

    $.getJSON('goods.json', function (data) {
        let out = ''
        function showPack() {
            for (let key in data){
                if (key > 9000){
                    out+='<div class="single-goods" data-price="'+data[key].cost+'" id="'+data[key]['article']+'">'

                    out+= '<div class="goodsCart">'
                    out+='<img src="'+data[key].img4+'" alt="">'
                    out+='</div>'

                    out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'
                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='</a>'

                    out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'
                }
                $('.package').html(out)
            }
        }
        showPack()
    })

    //Женские товары 111
    $.getJSON('goods.json', function (data) {
        let out = ''
        function showWomansGoods() {
            for (let key in data){
                if (key < 1000 ){
                    out+='<div class="single-goods" data-price="'+data[key].cost+'" id="'+data[key]['article']+'">'


                    out+= '<div class="goodsCart">'
                    out+='<img src="'+data[key].img4+'" alt="">'
                    out+='</div>'

                    out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'

                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='</a>'

                    out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'
                }
                if (key > 4050 && key < 4100){
                    out+='<div class="single-goods" data-price="'+data[key].cost+'">'


                    out+= '<div class="goodsCart">'
                    out+='<img src="'+data[key].img+'" alt="">'
                    out+='</div>'

                    out+='<a class="getArticle" data-art="'+key+'" href="goodsDetails.html">'

                    out+='<h3>'+data[key]['name']+'</h3>'
                    out+='</a>'

                    out+='<p>Цена: '+data[key]['cost']+' руб</p>'
                    out+='<button class="addToBag" data-art="'+key+'">В корзину</buttondata-art>'
                    out+='</div>'
                }
                $('.womanGoods').html(out)
            }
        }
        showWomansGoods()
        $('a.getArticle').on('click', getArticle)
        $('button.addToBag').on('click', addToCart)

    })
}






function getArticle() {
    let article = $(this).attr('data-art')

    localStorage.setItem('article', JSON.stringify(article))

}

function addToCart() {
//добавляем в корзину
    let articul = $(this).attr('data-art')


    if(cart[articul] !== undefined){
        cart[articul]++
    }
    else{
        cart[articul] = 1
    }

localStorage.setItem('cart', JSON.stringify(cart))


    let articl = $(this).attr('data-art')
    if(totalitems[articl] !== undefined){
        totalitems[articl]+1
    }
    else{
        totalitems[articl] = 1
    }

    localStorage.setItem('totalItem', JSON.stringify(totalitems))

    showMiniCart()
}



function checkCart() {
    //проверка наличие корзины в локалсторедж
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}
function checkArticle() {
    //проверка наличие корзины в локалсторедж
    if (localStorage.getItem('article') != null && 'article' != undefined){
        article = JSON.parse(localStorage.getItem('article'))
    }
}
function checkItem() {
    //проверка суммы товаров в локалсторедж
    if (localStorage.getItem('totalItem') != null){
        totalitems = JSON.parse(localStorage.getItem('totalItem'))
    }
}

function showMiniCart() {
    //выводим содержимое корзины
    let out = ''
    out+='<div class="sumParam">';
    out += totalitems++;
    out+='</div>';


    out+='<div class="cart">'
    out+='<a href="cart.html"><img src="img/shopping-cart.png" alt="корзина покупок" ></a>'
    out+='</div>'
    $('.miniCart').html(out)

}



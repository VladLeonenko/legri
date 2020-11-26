let cart = {};/*корзина*/


$.getJSON("goods.json", function(data) {

    let goods = data; //все товары в массиве
    checkCart()
    checkItem()
    showCart()//выводим товары в корзину


    function showCart() {
        let out = ''

        if ($.isEmptyObject(cart)) {
            let out = ''
            out+='<div class="emptyCart">'
            out+= 'Корзина пуста. Добавьте товар в корзину <a href="index.html">Выбрать товар</a>'
            out+= '</div>'
            $('.myCart').html(out)

        } else {

            for (let param in cart) {
                out+= '<div class="goodsBlock">'
                out+= '<div class="myOwnCart">'

                out += '<img src="' + goods[param].img + '" class="cartImg">'
                out+= '<p>'
                out += goods[param].name
                out+= '</p>'
                out+= '</div>'


                out+= '<div class="myCartManipulation">'

                out+= '<div class="amountGoods">'
                out += '<button class="minus" data-art="' + param + '">-</button>'
                out+= '<span>'
                out += cart[param]
                out+= '</span>'
                out += '<button class="plus" data-art="' + param + '">+</button>'
                out+= '</div>'


                out+= '<div class="sumGoods">'
                out+= '<span class="price">'
                out += cart[param] * goods[param].cost + ' руб.'
                out+= '</span>'
                out += '<button class="delete" data-art="' + param + '">удалить</button>'
                out += '<br>'
                out+= '</div>'
                out+= '</div>'
                out+= '</div>'

                //Данные заказа для отправки менеджеру

                out+= '<div class="cartData" >'
                out+=  goods[param].name + ' ' + goods[param].cost + ' руб. ' + cart[param] + ' шт.'
                out+= '</div>'
            }

            $('.myCart').html(out)
            $('.plus').on('click', plusGoods)
            $('.minus').on('click', minusGoods)
            $('.delete').on('click', deleteGoods)
            getDataToForm()

        }
    }


    function plusGoods() {
        let articul = $(this).attr('data-art')

        cart[articul]++
        totalitems++
        showCart()
        amountSum()
        saveCartToLocalStorage()
        saveItemToLocalStorage()
    }

    function minusGoods() {
        let articul = $(this).attr('data-art')

        if (cart[articul] > 1) {
            cart[articul]--
            totalitems--
        } else {
            delete cart[articul]
            totalitems--
        }
        showCart()
        amountSum()
        saveCartToLocalStorage()
        saveItemToLocalStorage()

    }

    function deleteGoods() {

        let articul = $(this).attr('data-art')
        delete cart[articul]

        let returnObj = localStorage.getItem('cart')

        function parseItem() {
            let parseItem = JSON.parse(returnObj)
            let itemKeys = parseItem[articul]
            totalitems = totalitems - itemKeys
        }

        parseItem()
        showCart()

        saveCartToLocalStorage()
        saveItemToLocalStorage()
        amountSum()
        location.reload()
    }
    amountSum()
    
})
function checkCart() {
    //проверка наличие корзины в локалсторедж
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}
function checkItem() {
    if (localStorage.getItem('totalItem') != null){
        totalitems = JSON.parse(localStorage.getItem('totalItem'))
    }
}
function saveCartToLocalStorage() {
    localStorage.setItem('cart' , JSON.stringify(cart))
    // localStorage.setItem('totalPrice' , JSON.stringify(sum))
}
function saveItemToLocalStorage() {
    localStorage.setItem('totalItem', JSON.stringify(totalitems))
}
function amountSum() {
    if ($.isEmptyObject(cart)){
        sum = 0;
        $('.sum').html(sum)
    } else{
        let prices = $('.price').text().match(/\d+/g).sort()
        if (prices != null) {
            for (var i = 0, sum = 0; i < prices.length; ++i) {
                sum += Number(prices[i]);
            }
        }
        $('.sum').html(sum)
    }
}
function getDataToForm(){
    let formData = [...(document.querySelectorAll('.cartData'))];
    let out = ''
    for (let g of formData) {
        if(formData.length){
            out += g.innerHTML + '<br>'
        }
       let test = g.innerText;
       document.querySelector('#finallyGoods').value += test ;
    }
    $('.dataFromCart').html(out)
}
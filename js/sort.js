let mySortGoods = document.querySelector('.manGoodsPage');
let sortWomanGoods = document.querySelector('.womanGoods');
let sortKidsGoods = document.querySelector('.kidsGoods');
let sortDecorationGoods = document.querySelector('.decoration');
let sortCorpGoods = document.querySelector('.corporateGoods');
let sortChristmasTrees = document.querySelector('.christmasTrees');
let sortGiftSet = document.querySelector('.giftSet');
let sortEdibleGifts = document.querySelector('.edibleGifts');
let sortHomeInterior = document.querySelector('.homeInterior');
let sortPackage = document.querySelector('.package');



function sortList(y, sortType) {

    for (let i = 0; i < y.children.length - 1; i++) {
        for (let j = i; j < y.children.length; j++) {
            if (+y.children[i].getAttribute(sortType) > +y.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = y.replaceChild(y.children[j], y.children[i]);
                insertAfter(replacedNode, y.children[i]);
            }
        }
    }
}

function sortListDesc(y, sortType) {
    for (let i = 0; i < y.children.length - 1; i++) {
        for (let j = i; j < y.children.length; j++) {
            if (+y.children[i].getAttribute(sortType) < +y.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = y.replaceChild(y.children[j], y.children[i]);
                insertAfter(replacedNode, y.children[i]);
            }
        }
    }
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}











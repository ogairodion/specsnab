import "%components%/burger/burger";
import $ from "jquery";
global.$ = global.jQuery = $;
// eslint-disable-next-line no-unused-vars
import fancybox from "@fancyapps/fancybox";

let windowWidth = 0;
const cart = document.querySelector('.header__cart');
const search = document.querySelector('.search');
const searchMobile = document.querySelector('.header__search-mobile');
const mobileIcons = document.querySelector('.header__mobile-icons');
const headerBottom = document.querySelector('.header__bottom .header__wrapper');
const headerContainer = document.querySelector('.header__center .header__container');
const arrowUp = document.querySelector('.arrow-up');

$.fancybox.defaults.backFocus = false;

windowWidth = window.innerWidth
adaptiveHeader(windowWidth);

window.addEventListener("resize", () => {
    windowWidth = window.innerWidth
    adaptiveHeader(windowWidth);
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 20) {
        arrowUp.classList.remove('hidden');
    } else {
        arrowUp.classList.add('hidden');
    }
});

$('.arrow-up').on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

function adaptiveHeader(windowWidth) {
    switch (true) {
        case windowWidth < 1099 && !mobileIcons.contains(cart):
                searchMobile.append(search);
                mobileIcons.append(cart);
            break;
        case windowWidth > 1099 && mobileIcons.contains(cart):
                headerContainer.append(search);
                headerBottom.append(cart);
            break;
    }
}
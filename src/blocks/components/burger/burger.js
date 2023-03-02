import "%components%/menu/menu";

const burger = document.querySelector('.burger');
const menuCatalog = document.querySelector('.menu-catalog');
const body = document.querySelector('body');
const htmlBody = document.querySelector('html');
const menuCatalogContentRight = document.querySelector('.menu-catalog__right');

let windowWidth;

onResize();

window.addEventListener('resize', onResize);

function onResize() {
    windowWidth = window.innerWidth;
    return windowWidth;
}

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menuCatalog.classList.toggle('open');
    htmlBody.classList.toggle('overflow-y-hidden');

    if (windowWidth > 991) {
        if (menuCatalogContentRight) {
            menuCatalogContentRight.classList.remove('show');
        }
    }
});
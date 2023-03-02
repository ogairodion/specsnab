const menuCatalogItem = document.querySelectorAll('.menu-catalog__item');
const menuCatalogContent = document.querySelectorAll('.menu-catalog__content');
const menuCatalogContentRight = document.querySelector('.menu-catalog__right');
const menuCatalogBack = document.querySelectorAll('.menu-catalog__content-title');

let windowWidth = 0;

windowWidth = window.innerWidth;

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
});

menuCatalogContent[0].classList.add('show');

menuCatalogItem.forEach((item) => {
    const arrow = item.querySelector('.menu-catalog__item-arrow');
    
    item.addEventListener('mouseover', (e) => {
        const currentItem = e.currentTarget;
        if (windowWidth > 1199) {
            const id = currentItem.dataset.id;
            getContent(id);
        }
    });

    arrow.addEventListener('click', (e) => {
        e.stopPropagation()
        const id = e.currentTarget.parentElement.dataset.id;
        getContent(id);
    });
});

menuCatalogBack.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.stopPropagation()
        if (windowWidth < 1199) {
            menuCatalogContentRight.classList.remove('show');
        }
    });
});

function getContent(id) {
    menuCatalogContent.forEach((item) => {
        const itemID = item.dataset.id;

        if (id == itemID) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }

        if (windowWidth < 1199) {
            menuCatalogContentRight.classList.add('show');
        }
    });
}
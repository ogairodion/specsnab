import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const productsSlider = new Swiper('.products-slider__container', {
    slidesPerView: 1,
    spaceBetween: 18,
    navigation: {
        nextEl: '.products-slider__arrow--next',
        prevEl: '.products-slider__arrow--prev',
    },
    pagination: {
        el: '.products-slider__pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },
    observer: true,
    observeParents: true,
    breakpoints: {
        600: {
            slidesPerView: 'auto',
        },
    },
});
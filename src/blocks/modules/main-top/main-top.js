import { Swiper, Navigation, EffectFade, Pagination } from "swiper";

Swiper.use([Navigation, EffectFade, Pagination]);

const mainTopSlider = new Swiper('.main-top__slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.main-top__slider-arrow--next',
        prevEl: '.main-top__slider-arrow--prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    observer: true,
    observeParents: true,
    loop: true,
    pagination: {
        el: '.main-top__pagination',
        clickable: true,
    },
});

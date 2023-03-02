// import "%components%/counter/counter";
import "%components%/tabs/tabs";
import { Swiper, EffectFade } from 'swiper';

Swiper.use([EffectFade]);

const thumbs = document.querySelectorAll('.products-detail__thumbs-img');

const productsDetailSlider = new Swiper('.products-detail__slider', {
    slidesPerView: 1,
    spaceBetween: 18,
    observer: true,
    observeParents: true,
    resistance: true,
    resistanceRatio: 0,
    speed: 600,
    on: {
        slideChange: () => {
            getActive(productsDetailSlider.activeIndex);
        },
    }, 
});

thumbs.forEach((el, i) => {
    if (i == 0) {
        el.classList.add('active');
    }
    el.addEventListener('click', () => {
        productsDetailSlider.slideTo(i);
        getActive(i);
    })
})

function getActive(index) {
    thumbs.forEach((el, i) => {
        if (i == index) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    })
}
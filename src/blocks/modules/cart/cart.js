// import "%components%/counter/counter";
import { Swiper } from "swiper";

const cartRadio = document.querySelectorAll('input[type=radio]');
const input = document.querySelector('.cart__delivery-input');
const map = document.querySelector('.cart__delivery-map');

getChecked(cartRadio[0], 0);

cartRadio.forEach((el, i) => {
    el.addEventListener('change', (e) => {
        getChecked(e.target, i);
    });
});

function getChecked(el, id) {
    const elID = el.getAttribute('id');
    if (el.checked) {
        if (elID === '#delivery_1') {
            map.classList.remove('hidden');
            input.classList.add('hidden');
        } else {
            map.classList.add('hidden');
            input.classList.remove('hidden');
        }
    }
}

const tableSlider = new Swiper('.cart__table-slider', {
    slidesPerView: 'auto',
    freeMode: true,
    resistance: true,
    resistanceRatio: 0,
});

const counterTrigger = document.querySelectorAll('.counter__trigger');

counterTrigger.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        const currentTrigger = e.target;
        const parent = currentTrigger.parentElement;
        const input = parent.querySelector('input');
        let value = parseInt(input.value);
        
        switch(true) {
            case currentTrigger.classList.contains('counter__minus') && value > 1:
                value--;
                break;
            case currentTrigger.classList.contains('counter__plus'):
                value++;
                break;
        }

        input.value = value.toString();
    });
});
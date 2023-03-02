const tabs_titles = document.querySelectorAll('.tabs__title');
const tabs_contents = document.querySelectorAll('.tabs__content');

tabs_titles[0].classList.add('active');
tabs_contents[0].classList.add('active');

tabs_titles.forEach((tab) => {
    tab.addEventListener('click', () => {
        showTabs(tab);
    });
});

function showTabs(tab) {
    const id = tab.dataset.id;

    tabs_titles.forEach(element => {
        element.classList.remove('active');
    });

    tabs_contents.forEach(element => {
        element.classList.remove('active');
    });

    tabs_titles[id].classList.add('active');
    tabs_contents[id].classList.add('active');
}
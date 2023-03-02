const triggerSidebar = document.querySelector('.sidebar__trigger-btn');
const sidebarContainer = document.querySelector('.sidebar');

triggerSidebar.addEventListener('click', () => {
    sidebarContainer.classList.toggle('open');
});
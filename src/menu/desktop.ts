const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
};

const menuEmail = document.querySelector('.navbar-right__email') as HTMLDListElement;
const desktopMenu = document.querySelector('.desktop-menu') as HTMLDivElement;

menuEmail.addEventListener('click', toggleDesktopMenu);

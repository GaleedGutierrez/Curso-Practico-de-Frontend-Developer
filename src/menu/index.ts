const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
};

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('inactive');
};

const removeMenuOption = () => {
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
};

const menuEmail = document.querySelector('.navbar-right__email') as HTMLDListElement;
const desktopMenu = document.querySelector('.desktop-menu') as HTMLDivElement;
const burgerIcon = document.querySelector('.header__menu') as HTMLElement;
const mobileMenu = document.querySelector('.mobile-menu') as HTMLDivElement;
const mobileScreen = window.matchMedia('(min-width: 800px)');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobileMenu);
mobileScreen.addEventListener('change', removeMenuOption);
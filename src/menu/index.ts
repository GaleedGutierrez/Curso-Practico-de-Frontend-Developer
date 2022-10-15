const toggleMobileDesktopMenu = (event: Event) => {
    const ELEMENT = event.srcElement as HTMLElement;
    const CLASS_ELEMENT = ELEMENT.getAttribute('class');
    const DESKTOP_CLASS = 'header__content header__item navbar-right__email';
    const MENU_CLASS = null;

    if (CLASS_ELEMENT === DESKTOP_CLASS)
        DESKTOP_MENU.classList.toggle('inactive');
    if (!MENU_CLASS)
        MOBILE_MENU.classList.toggle('inactive');
    removeCartAside();
};

const toggleCartAside = () => {
    ASIDE.classList.toggle('inactive');
    removeMenuOption();
};

const removeMenuOption = () => {
    const IS_MOBILE_MENU_CLOSE = DESKTOP_MENU.classList.contains('inactive');
    const IS_DESKTOP_MENU_CLOSE = MOBILE_MENU.classList.contains('inactive');
    if (!IS_MOBILE_MENU_CLOSE) {
        DESKTOP_MENU.classList.add('inactive');
    }
    if (!IS_DESKTOP_MENU_CLOSE) {
        MOBILE_MENU.classList.add('inactive');
    }
};

const removeCartAside = () => {
    const IS_CART_ASIDE_CLOSE = ASIDE.classList.contains('inactive');
    if (!IS_CART_ASIDE_CLOSE) {
        ASIDE.classList.add('inactive');
    }
};

const MENU_EMAIL = document.querySelector('.navbar-right__email') as HTMLDListElement;
const DESKTOP_MENU = document.querySelector('.desktop-menu') as HTMLDivElement;
const BURGER_ICON = document.querySelector('.header__menu') as HTMLElement;
const MOBILE_MENU = document.querySelector('.mobile-menu') as HTMLDivElement;
const MOBILE_SCREEN = window.matchMedia('(min-width: 800px)');
const MENU_CART_ICON = document.querySelector('.navbar-right__shopping-cart') as HTMLDListElement;
const ASIDE = document.querySelector('.product-detail') as HTMLElement;

MENU_EMAIL.addEventListener('click', toggleMobileDesktopMenu);
BURGER_ICON.addEventListener('click', toggleMobileDesktopMenu);
MENU_CART_ICON.addEventListener('click', toggleCartAside);
MOBILE_SCREEN.addEventListener('change', removeMenuOption);
MOBILE_SCREEN.addEventListener('change', removeCartAside);
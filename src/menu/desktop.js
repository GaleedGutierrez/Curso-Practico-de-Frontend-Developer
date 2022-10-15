var toggleDesktopMenu = function () {
    desktopMenu.classList.toggle('inactive');
};
var menuEmail = document.querySelector('.navbar-right__email');
var desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);

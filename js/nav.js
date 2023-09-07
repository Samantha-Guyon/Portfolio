document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarList = document.getElementById('navbar-list');

    menuToggle.addEventListener('click', function () {
        navbarList.classList.toggle('active');
    });
});
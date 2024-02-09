// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navIcon = document.getElementById('nav-icon');
    const navMenu = document.querySelector('nav ul');

    navIcon.addEventListener('click', function() {
        this.classList.toggle('open');
        navMenu.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navIcon = document.getElementById('nav-icon');
    const navMenu = document.querySelector('nav ul');

    navIcon.addEventListener('click', function() {
        this.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Function to handle carousel effect
    function carouselSlide() {
        const carousel = document.querySelector('.carousel');
        carousel.style.transition = 'transform 0.5s ease-in-out'; // Add transition effect
        const firstProduct = carousel.children[0];
        carousel.style.transform = 'translateX(-100%)'; // Move carousel to the left
        setTimeout(function() {
            carousel.appendChild(firstProduct); // Move first product to the end of the carousel
            carousel.style.transition = 'none'; // Remove transition to instantly move to the new position
            carousel.style.transform = 'translateX(0)'; // Reset carousel position
        }, 500); // Wait for transition to complete before resetting position
    }

    setInterval(carouselSlide, 3000); // Change slide every 3 seconds
});

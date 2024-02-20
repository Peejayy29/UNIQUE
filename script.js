document.addEventListener('DOMContentLoaded', function() {
    const navIcon = document.getElementById('nav-icon');
    const navMenu = document.querySelector('nav ul');

    // Toggle navigation menu on mobile devices
    navIcon.addEventListener('click', function() {
        this.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Product Details page navigation
    const viewDetailButtons = document.querySelectorAll('.btn-view-details');
    
    viewDetailButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the button
            event.stopPropagation(); // Stop the event from propagating
            
            const productId = button.getAttribute('data-product-id');
            loadProductDetails(productId);
        });
    });

    function loadProductDetails(productId) {
        // Find the product details from the products array based on the productId
        const product = products.find(product => product.id === parseInt(productId));
        
        if (product) {
            // Navigate to the product details page with the fetched details
            const url = `product-details.html?id=${product.id}&name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&details=${encodeURIComponent(product.details)}&image=${encodeURIComponent(product.image)}&brochure=${encodeURIComponent(product.brochureUrl)}`;
            window.location.href = url;
        } else {
            console.error(`Product with ID ${productId} not found.`);
        }
    }
});

// Sample products array (replace it with your actual product data)
const products = [
    {
        id: 1,
        name: "Product 1",
        image: "/Assets/Univon Commercial Heat Pump 38.5 KW.jpg",
        price: "$99.99",
        details: "Product 1 details here...",
        brochureUrl: "product1_brochure.pdf"
    },
    {
        id: 2,
        name: "Product 2",
        image: "/Assets/Unitemp E-heater controller image 1.jpeg",
        price: "$149.99",
        details: "Product 2 details here...",
        brochureUrl: "product2_brochure.pdf"
    }
    // Add details for other products similarly
];

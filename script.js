document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav'); // Get the nav element

    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('show'); // Toggle the 'show' class on the nav
    });

    // Close mobile menu when a link is clicked
    // ... (rest of your JavaScript code as before)
});

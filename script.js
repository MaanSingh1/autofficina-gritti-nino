document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navUl = document.querySelector('#nav ul');

    mobileMenuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('#nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navUl.classList.remove('show');
            }
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - document.getElementById('header').offsetHeight, // Adjusted for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submit (fittizio) - REMOVED SUBMIT FUNCTIONALITY
    // const bookingForm = document.getElementById('booking-form');
    // bookingForm.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     alert("Richiesta inviata! Ti contatteremo a breve per confermare l'appuntamento.");
    //     bookingForm.reset();
    // });
});

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navUl = document.querySelector('#nav ul');

    mobileMenuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, 
                    behavior: 'smooth'
                });
            }
            navUl.classList.remove('show');
        });
    });

    // Form submit (fittizio)
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Richiesta inviata! Ti contatteremo a breve per confermare l'appuntamento.");
        bookingForm.reset();
    });
});

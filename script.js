document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');
    const header = document.getElementById("header");

    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Smooth scrolling with header offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('#header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                if (window.innerWidth <= 768) {
                    nav.classList.remove('show');
                }
            }

        });
    });
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction()};
    
    // Get the header
    var header = document.getElementById("header");
    
    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
});

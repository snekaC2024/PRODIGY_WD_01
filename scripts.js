// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const homeSection = document.getElementById('home');

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Function to add 'section-visible' class to elements in viewport
    function onScroll() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('section-visible');
            }
        });

        // Navbar background change on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Initial check
    onScroll();

    // Add scroll event listener
    window.addEventListener('scroll', onScroll);

    // Add click event listener to the home section
   });


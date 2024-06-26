document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down - hide the navbar
            navbar.classList.add('hide');
        } else {
            // Scroll up - show the navbar
            navbar.classList.remove('hide');
        }
        lastScrollTop = scrollTop;
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Hide the navigation bar on link click
            navbar.classList.add('hide');
        });
    });
});

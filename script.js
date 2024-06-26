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

// Get all button elements
let buttons = document.querySelectorAll("button");

// Find the button with the text 'Contact Me'
let contactMeButton = null;
buttons.forEach(function(button) {
    if (button.textContent.trim() === "Contact Me") {
        contactMeButton = button;
    }
});

// If the button is found, move it to the target element
if (contactMeButton) {
    // Select the target element with the ID 'contact-loc'
    let contactLoc = document.getElementById('contact-loc');

    // Check if the target element exists
    if (contactLoc) {
        // Append the button to the target element
        contactLoc.appendChild(contactMeButton);
    } else {
        console.error("Element with ID 'contact-loc' not found.");
    }
} else {
    console.error("Button with text 'Contact Me' not found.");
}

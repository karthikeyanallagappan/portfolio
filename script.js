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

// JavaScript approach
const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// jQuery approach
$('.burger-menu').click(function() {
    $('.nav-list').toggleClass('active');
});

exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event));
    
    try {
        // Parse JSON data
        const data = JSON.parse(event.body);  // Assuming 'event.body' contains your JSON data
        console.log('Parsed data:', data);
        
        // Process the data
        // Your logic here...
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Success' })
        };
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Invalid JSON format' })
        };
    }
};

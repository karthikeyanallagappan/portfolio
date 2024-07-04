document.addEventListener('DOMContentLoaded', function() {
    // Handle Navbar Visibility on Scroll
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    if (navbar) {
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
    }

    // Handle Burger Menu Toggle
    const burgerMenu = document.querySelector('.navbar-toggler');
    const navList = document.querySelector('.navbar-collapse');

    if (burgerMenu && navList) {
        burgerMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // jQuery approach
        $('.navbar-toggler').click(function() {
            $('.navbar-collapse').toggleClass('active');
        });
    }

    // Handle Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const apiURL = 'https://7o2if58glh.execute-api.eu-north-1.amazonaws.com/default/Email-api';

            const templateParams = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
            };

            console.log('Sending data to API:', templateParams); // Debug log

            fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(templateParams),
            })
            .then(response => {
                console.log('Received response:', response); // Debug log
                return response.json();
            })
            .then(data => {
                console.log('Parsed response JSON:', data); // Debug log
                clearValidationErrors();

                if (data.status === 'error') {
                    Object.keys(data.errors).forEach(field => {
                        const input = document.getElementById(field);
                        showValidationError(input, data.errors[field]);
                    });
                    alert('Failed to send data. Please correct the errors and try again.');
                } else {
                    alert('Thank You for Contacting Us!');
                    clearForm();
                }
            })
            .catch(error => {
                console.error('Error:', error); // Debug log
                alert('Failed to send data. Please try again later.');
            });
        });

        function showValidationError(input, message) {
            input.classList.add('is-invalid');
            input.nextElementSibling.textContent = message;
        }

        function clearValidationErrors() {
            const inputs = document.querySelectorAll('.is-invalid');
            inputs.forEach(input => {
                input.classList.remove('is-invalid');
                input.nextElementSibling.textContent = '';
            });
        }

        function clearForm() {
            document.getElementById('contact-form').reset();
            clearValidationErrors();
        }
    }
});

// script.js
const sunIcon = document.querySelector('.fa-sun'); // Select sun icon
const moonIcon = document.querySelector('.fa-moon'); // Select moon icon
const toggle = document.getElementById('darkModeToggle'); // Get the toggle switch
const footerAbout = document.querySelector('.footer-about'); // Select footer about section
const footerCopyright = document.querySelector('.footer-copyright'); // Select footer copyright section
const navbar = document.querySelector('.navbar'); // Select the navbar

toggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    navbar.classList.toggle('dark-mode'); // Toggle dark mode class on navbar

    // Log statements to verify class toggling
    console.log('Toggling dark mode for footer...');
    console.log(footerAbout.classList); // Check if the class is toggled correctly
    console.log(footerCopyright.classList);

    if (footerAbout && footerCopyright) {
        footerAbout.classList.toggle('dark-mode'); // Toggle dark mode class on footer about
        footerCopyright.classList.toggle('dark-mode'); // Toggle dark mode class on footer copyright
    }
});



// Select all nav links in the offcanvas
const navLinks = document.querySelectorAll('.offcanvas .nav-link');

// Add click event to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Hide the offcanvas menu
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvas) {
            offcanvas.hide(); // Hide offcanvas if it's open
        }
    });
});

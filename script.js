let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a'); 

// Handle scroll event to highlight active section link
window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove active class from all links
                // Corrected selection to find the link with the matching 'href' attribute
                let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active'); // Add active class to the correct link
                }
            });
        }
    });
};

// Toggle the navbar visibility when the menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const navSlide = () => {
    // navSlide function
    
        const lines = document.querySelector('.navbar-lines-container');
        const nav = document.querySelector('.navbar-links');
        const navLinks = document.querySelectorAll('.navbar-links li');
        // variables defined by HTML selectors: navbar-lines-container, navbar-links, navbar-links li
    
        lines.addEventListener('click', () => {
        // function for lines when clicked
    
            nav.classList.toggle('nav-active');
            // toggle nav-active class
    
            navLinks.forEach((link, index) => {
            // function for the animation, take each link
    
                if (link.style.animation) {
                    link.style.animation = '';
                } 
    
                else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                    // add animation styles
                }
            });
        });
    }
    
    navSlide();
    // call navSlide function
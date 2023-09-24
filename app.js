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

function navBgChange() {
// navBgChange function

    let scrollValue = window.scrollY;
    let navbar = document.getElementById('navbar');
    console.log(scrollValue);

    const btn1_a = document.querySelector("#btn1-a");
    const btn2_a = document.querySelector("#btn2-a");
    const btn3_a = document.querySelector("#btn3-a");
    const btn4_a = document.querySelector("#btn4-a");

    const navbar_title = document.querySelector(".navbar-title");

    const line1_div = document.querySelector("#line1-div");
    const line2_div = document.querySelector("#line2-div");
    const line3_div = document.querySelector("#line3-div");

    let query = window.matchMedia("(max-width: 770px)");
    let query2 = window.matchMedia("(max-width: 1030px)");
    let query3 = window.matchMedia("(max-width: 2560px)");

        if (scrollValue < 700) {
            navbar.classList.remove('navBgChange');
            
            navbar_title.style['color'] = 'black';
            line1_div.style['background-color'] = "black";
            line2_div.style['background-color'] = "black";
            line3_div.style['background-color'] = "black";

            if (query.matches || query2.matches || query3.matches) {
                navbar_title.style['color'] = 'black';
            } else if (!query.matches || !query2.matches || !query3.matches) {
                document.querySelector('navbar-links').style['color'] = 'black';
                navbar.style['background-color'] = "white";
                btn1_a.style['color'] = 'black';    
                btn2_a.style['color'] = 'black';
                btn3_a.style['color'] = 'black';
                btn4_a.style['color'] = 'black';
            }

        } else if (scrollValue > 700) {
            navbar.classList.add('navBgChange');
            btn1_a.style['color'] = 'black';
            btn2_a.style['color'] = 'black';
            btn3_a.style['color'] = 'black';
            btn4_a.style['color'] = 'black';
            navbar_title.style['color'] = 'black';
            line1_div.style['background-color'] = "black";
            line2_div.style['background-color'] = "black";
            line3_div.style['background-color'] = "black";
        } else if (query.matches || query2.matches || query3.matches) {
            btn1_a.style['color'] = 'white';
            btn2_a.style['color'] = 'white';
            btn3_a.style['color'] = 'white';
            btn4_a.style['color'] = 'white';
        } else if (!query.matches || !query2.matches || !query3.matches) {
            btn1_a.style['color'] = 'black';
            btn2_a.style['color'] = 'black';
            btn3_a.style['color'] = 'black';
            btn4_a.style['color'] = 'black';
        }


}

window.addEventListener('scroll', navBgChange);
// call navBgChange function with scroll
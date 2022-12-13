// ******** Set up the date for the copyright ********
// const date = document.getElementById("date");
// date.innerHTML = new Date().getFullYear();

// ************ Close links ************

//Selecting the nav-toggle button/class across the DOM
const navToggle = document.querySelector('.nav-toggle');

//Selecting the links-container class across the DOM
const linksContainer = document.querySelector('.links-container');

//Selecting the links class across the DOM
const links = document.querySelector('.links');

//Adding a callback function to show the link container as opposed to it being hidden
navToggle.addEventListener('click', function(){
    linksContainer.classList.toggle("show-links")
})

// ********** Fixed Navbar **********

// Creating a fixed navbar
const navbar = document.getElementById('nav');
const topLink = document.querySelector('top-link');

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav')
    } else{
        navbar.classList.remove('fixed-nav')
    };

    if(scrollHeight > 500){
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }

})

// ********** Smooth scroll **********

//Select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        //Prevent default
        e.preventDefault();

        //navigate to specific spot 
        const id = e.currentTarget.getAttribute('href');
    })
})

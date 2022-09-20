//Selecting the elements across the DOM
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links")

// Adding an event to the navToggle class
navToggle.addEventListener("click", function(){
    // Can use the add + remove functionalities
    links.classList.toggle("show-links")
})
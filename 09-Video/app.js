// Selecting the elements needed across the DOM
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// Add a callback function to the button to see if it has the class ".slide"
btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add("slide");
        video.pause();
    } else{
        btn.classList.remove("slide");
        video.play();
    }
});

//Preloader code
const preloader = document.querySelector(".preloader");

//Add a function that hides the preloader gif once the video loads
window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader')
})
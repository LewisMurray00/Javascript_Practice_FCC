const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];

//Selecting the elements using the DOM
const btn = document.getElementById('btn');
const colour = document.querySelector(".colour");

//Using the DOM to listen for a certain event to occur and then a call back function happens
btn.addEventListener('click', function(){
   // get random number between 0-3
    const randomNumber = Math.floor(Math.random() * colours.length);

    // Selecting what elements to change with the result of the random number
   document.body.style.backgroundColor = colours[randomNumber];
   colour.textContent = colours[randomNumber];
   
})
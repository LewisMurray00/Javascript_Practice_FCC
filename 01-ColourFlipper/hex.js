const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

// Selecting the elements
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

btn.addEventListener('click', function(){
    let hexColour = '#';
    //Create a for loop that add a random number from the hex array, while it is less than 6
    for(let i =0; i<6; i++){
        hexColour += hex[getRandomItem()]
    }

    colour.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
})

// Creating a function to randomise and pull an item from the 'hex' array
function getRandomItem(){
    return Math.floor(Math.random() * hex.length)
};
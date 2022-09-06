// Set initial count
let count = 0;

// Selecting the value (span) and all the buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

// Creating a call back function for each btn element
btns.forEach(function(btn){
    //Listening for the click of the specific button
    btn.addEventListener("click", function(e){
       const styles = (e.currentTarget.classList)
       if(styles.contains('btn-decrease')){
        count--;
       } else if(styles.contains('btn-reset')){
        count = 0;
       } else if(styles.contains('btn-increase')){
        count++;
       } if (count > 0){
        value.style.color = "green"
       } else if(count < 0){
        value.style.color = "red"
       } else if(count == 0){
        value.style.color = "black"
       }
       value.textContent = count
    })
})
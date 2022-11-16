// Select the buttons and loop through them adding an event listener

const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        console.log(e.currentTarget);
    })
})
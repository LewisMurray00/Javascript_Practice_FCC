//Traversing the DOM method 

// Select the buttons and loop through them adding an event listener

const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text');
    })
})


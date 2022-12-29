// Selecting the about section
const about = document.querySelector('.about');

// Target all the buttons
const btns = document.querySelectorAll('.tab-btn');

// Get all the articles
const articles = document.querySelectorAll(".content");

// Listen for a click event
about.addEventListener('click', function(e){
    const id = e.target.dataset.id; 

    if(id){
        // Remove active class from other buttons
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})
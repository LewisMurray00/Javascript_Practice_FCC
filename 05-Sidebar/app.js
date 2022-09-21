const toggleBtn = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

//Toggle function using eventlistener
toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar")
})

// Close function using EventListener
closeBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar")
})
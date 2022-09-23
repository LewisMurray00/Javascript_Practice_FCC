// Select modal button, modal overlay and close button
const modalBtn = document.querySelector(".btn-modal");
const closeBtn = document.querySelector(".btn-close");
const modalOverlay = document.querySelector(".modal-overlay");

// Listen for click events on btn-modal and btn-close

// When user click btn-modal add .Open-modal class to modal-overlay
modalBtn.addEventListener('click', function(){
    modalOverlay.classList.add('open-modal')
})
// When user clicks btn-close remove .open-modal from modal-overlay
closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal')
})

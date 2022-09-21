const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
    console.log("hi")
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
    console.log("hi")
  sidebar.classList.remove("show-sidebar");
});
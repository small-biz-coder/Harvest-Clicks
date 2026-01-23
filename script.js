var service = document.querySelectorAll(".text")[2];
var dropdown = document.querySelector(".container");
var box = document.querySelector(".box");


function toggleMenu() {
  dropdown.classList.toggle("open");
}

// Close dropdown when clicking anywhere else
document.addEventListener("click", function(event) {
  // Don't close if clicking on the service menu itself
  if (!service.contains(event.target) && dropdown.classList.contains("open")) {
    dropdown.classList.remove("open");
  }
});

// Toggle dropdown when clicking on service
service.addEventListener("click", function(event) {
  event.stopPropagation(); 
  toggleMenu();
});

function openMobileMenu() {
   dropdown.classList.toggle("mobile-menu");
}

box.addEventListener("click", openMobileMenu);





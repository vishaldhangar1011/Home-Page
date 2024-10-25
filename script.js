const button = document.getElementById("navbar-toggle");
const nav = document.getElementById("navbar-multi-level");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

//button clicked logic
button.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  nav.classList.toggle("block");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

//checkmark logic
function toggleTerms(checkbox) {
  const checkmark = checkbox.nextElementSibling.querySelector('.checkmark');
  if (checkbox.checked) {
      checkmark.classList.remove('hidden');
  } else {
      checkmark.classList.add('hidden');
  }
}

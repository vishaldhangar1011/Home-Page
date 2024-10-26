const button = document.getElementById("navbar-toggle");
const nav = document.getElementById("navbar-multi-level");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const loanRange = document.getElementById('loanRange');
        const loanAmount = document.getElementById('loanAmount');
        const progressBar = document.getElementById('progressBar');

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

//range logic
loanRange.addEventListener('input', function() {
  const value = parseInt(this.value);
  loanAmount.textContent = `$${value.toLocaleString()}`;
  const percentage = ((value - 100) / (35000 - 100)) * 100;
  progressBar.style.width = `${percentage}%`;
});
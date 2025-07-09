const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Toggle the nav menu when hamburger is clicked
navToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent this click from bubbling up to the document listener
  navMenu.classList.toggle('show');
});

// Function to close the nav menu
function closeMenu() {
  navMenu.classList.remove('show');
}

// Close nav when clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideNav = navMenu.contains(event.target);
  const isClickOnToggle = navToggle.contains(event.target);

  if (!isClickInsideNav && !isClickOnToggle) {
    closeMenu();
  }
});

// Also close menu on touch anywhere outside
document.addEventListener('touchstart', (event) => {
  const isTouchInsideNav = navMenu.contains(event.target);
  const isTouchOnToggle = navToggle.contains(event.target);

  if (!isTouchInsideNav && !isTouchOnToggle) {
    closeMenu();
  }
});

// Also close menu on scroll
document.addEventListener('scroll', closeMenu, { passive: true });

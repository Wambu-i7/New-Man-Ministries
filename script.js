const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Function to toggle menu
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Function to close menu
function closeMenu() {
  navMenu.classList.remove('show');
}

// Function to handle both clicks and touches outside the nav
function handleOutsideInteraction(event) {
  const isInsideNav = navMenu.contains(event.target);
  const isOnToggle = navToggle.contains(event.target);

  if (!isInsideNav && !isOnToggle) {
    closeMenu();
  }
}

// Attach both click and touchstart listeners in one go
['click', 'touchstart'].forEach(evt =>
  document.addEventListener(evt, handleOutsideInteraction)
);

document.addEventListener('scroll', closeMenu, { passive: true });

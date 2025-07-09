    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Close the nav when clicking anywhere outside the nav
    document.addEventListener("click", (event) => {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);

    // If click is outside both nav and toggle button, hide the menu
    if (!isClickInsideNav && !isClickOnToggle) {
        navMenu.classList.remove("show");
    }
    });
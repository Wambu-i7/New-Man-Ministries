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

// View More Button functionality
const viewMoreBtn = document.querySelector('.view-more-btn');
const hiddenItems = document.querySelectorAll('.gallery-item.hidden');

if (viewMoreBtn) {
  viewMoreBtn.addEventListener('click', () => {
    const isShowing = viewMoreBtn.textContent === 'View Less';

    hiddenItems.forEach(item => {
      item.style.display = isShowing ? 'none' : 'block';
    });

    viewMoreBtn.textContent = isShowing ? 'View More' : 'View Less';

  if (isShowing) {
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Lightbox functionality
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;


//Open lightbox on an image click
galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'flex';
  });
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
}
// Show previous image
if (prevBtn) {
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage();
  });
}

// Show next image
if (nextBtn) {
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage();
  });
}

// Function to display current image
function showImage() {
  lightboxImg.src = galleryImages[currentIndex].src;
}


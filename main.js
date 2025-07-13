// Main Page Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Make all .zoomable-img-link images open in modal
  function openLightbox(src) {
    const modal = document.getElementById('img-lightbox-modal');
    const modalImg = document.getElementById('img-lightbox-img');
    modalImg.src = src;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    const modal = document.getElementById('img-lightbox-modal');
    modal.style.display = 'none';
    document.getElementById('img-lightbox-img').src = '';
    document.body.style.overflow = '';
  }
  
  // Setup lightbox for glimpse grid images
  document.querySelectorAll('.zoomable-img-link img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.parentElement.addEventListener('click', function(e) {
      e.preventDefault();
      openLightbox(img.src);
    });
  });
  
  // Also make the main image zoomable
  const mainImg = document.querySelector('.main-centered-container img');
  if(mainImg) {
    mainImg.style.cursor = 'zoom-in';
    mainImg.addEventListener('click', function() {
      openLightbox(mainImg.src);
    });
  }
  
  // Lightbox modal controls
  const lightboxClose = document.getElementById('img-lightbox-close');
  const lightboxModal = document.getElementById('img-lightbox-modal');
  
  if (lightboxClose) {
    lightboxClose.onclick = closeLightbox;
  }
  
  if (lightboxModal) {
    lightboxModal.onclick = function(e) {
      if (e.target === this) closeLightbox();
    };
  }
}); 
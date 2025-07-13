// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDropdown = document.getElementById('mobileDropdown');
  const closeMobileMenu = document.getElementById('closeMobileMenu');
  
  function toggleMobileMenu(show) {
    if (show) {
      mobileDropdown.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (mobileMenuBtn) mobileMenuBtn.classList.add('hide');
    } else {
      mobileDropdown.classList.remove('active');
      document.body.style.overflow = '';
      if (mobileMenuBtn) mobileMenuBtn.classList.remove('hide');
    }
  }
  
  if (mobileMenuBtn) {
    mobileMenuBtn.onclick = () => toggleMobileMenu(true);
  }
  
  if (closeMobileMenu) {
    closeMobileMenu.onclick = () => toggleMobileMenu(false);
  }
  
  // Hide menu on nav link click (for SPA feel)
  if (mobileDropdown) {
    Array.from(mobileDropdown.querySelectorAll('a')).forEach(el => {
      el.onclick = () => toggleMobileMenu(false);
    });
  }
  
  // Show/hide hamburger based on screen size
  function handleResize() {
    if (window.innerWidth <= 768) {
      if (mobileMenuBtn) mobileMenuBtn.style.display = 'flex';
    } else {
      if (mobileMenuBtn) mobileMenuBtn.style.display = 'none';
      if (mobileDropdown) mobileDropdown.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  
  window.addEventListener('resize', handleResize);
  handleResize();
}); 
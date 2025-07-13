// Index Page Intro Animation
document.addEventListener('DOMContentLoaded', function() {
  // Always show intro page, then navigate to main.html
  setTimeout(function() {
    document.querySelector('.intro-container').classList.add('fade-out');
    setTimeout(function() {
              window.location.href = 'pages/main.html';
    }, 700); // match transition duration
  }, 3000);
}); 
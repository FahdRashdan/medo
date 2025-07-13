document.addEventListener('DOMContentLoaded', function() {
  const projectImages = {
    'Bianchi Ilios | Developer X': 10,
    '173 North Coast | The Waterway': 10,
    'Aeon | Matchado-Silvetti': 11,
    'Azailya | Sodic': 6,
    'Baymount | Maven': 7,
    'Cairo Gate | Emaar': 3,
    'Cali-Coast | Maven': 10,
    'Campus | Marakez': 5,
    'City Gate | Qatari Diar': 5,
    'District 5 | Marakez': 11,
    'EDNC | SODIC': 5,
    'Gouna Golf | Orascom': 4,
    'Grenada | Ora': 11,
    'Jefaira | Inertia Properties': 5,
    'June Beach House | Sodic': 8,
    'Kardia New Capital | Capital Link': 5,
    'Karmell | Sodic': 11,
    'Majada | Iwan': 8,
    'Makadi Heights Downtown | Orascom Developments': 4,
    'Mindhaus | Marakez': 10,
    'O-West | Orascom': 7,
    'Ourika | Developer X': 11,
    'Signature Villa | Emaar': 4,
    'Sodic-East | SODIC': 6,
    'Soul | Emaar': 7,
    'Swan Lake North Coast | Hassan Allam': 9,
    'The Estates | Sodic': 9,
    'W-Residence | One Ninety | LMD': 11,
    'Zed-East | Ora': 5,
    'Zed-West | WATG | Ora': 8
  };

  let currentModalProject = null;
  let currentModalIndex = 0;
  let currentModalCount = 0;

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
      const project = this.getAttribute('data-project');
      showGallery(project);
    });
  });

  function showGallery(project) {
    document.getElementById('projectsGrid').style.display = 'none';
    document.getElementById('projectsIntro').style.display = 'none';
    document.getElementById('galleryView').classList.add('active');
    document.getElementById('galleryTitle').textContent = project;
    const count = projectImages[project] || 1;
    const galleryImages = document.getElementById('galleryImages');
    galleryImages.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const img = document.createElement('img');
      img.src = `../projects/${encodeURIComponent(project)}/${i + 1}.avif`;
      img.alt = project + ' image ' + (i + 1);
      img.loading = 'lazy';
      img.setAttribute('data-index', i);
      img.setAttribute('data-project', project);
      galleryImages.appendChild(img);
    }
    Array.from(galleryImages.querySelectorAll('img')).forEach(img => {
      img.onclick = function() {
        const idx = parseInt(this.getAttribute('data-index'), 10);
        const proj = this.getAttribute('data-project');
        openImgModal(proj, idx, count);
      };
    });
  }

  function openImgModal(project, index, count) {
    currentModalProject = project;
    currentModalIndex = index;
    currentModalCount = count;
    updateImgModal();
    document.getElementById('imgModal').classList.add('active');
  }
  
  function updateImgModal() {
    const modalImg = document.getElementById('imgModalImg');
    modalImg.src = `../projects/${encodeURIComponent(currentModalProject)}/${currentModalIndex + 1}.avif`;
    modalImg.alt = currentModalProject + ' image ' + (currentModalIndex + 1);
  }
  
  function closeImgModal() {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('imgModalImg');
    modal.classList.remove('active');
    modalImg.src = '';
  }
  
  document.getElementById('imgModalClose').onclick = closeImgModal;
  document.getElementById('imgModal').onclick = function(e) {
    if (e.target === this) closeImgModal();
  };
  
  document.getElementById('imgModalPrev').onclick = function(e) {
    e.stopPropagation();
    currentModalIndex = (currentModalIndex - 1 + currentModalCount) % currentModalCount;
    updateImgModal();
  };
  
  document.getElementById('imgModalNext').onclick = function(e) {
    e.stopPropagation();
    currentModalIndex = (currentModalIndex + 1) % currentModalCount;
    updateImgModal();
  };
  
  document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('imgModal');
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeImgModal();
    if (e.key === 'ArrowLeft') {
      currentModalIndex = (currentModalIndex - 1 + currentModalCount) % currentModalCount;
      updateImgModal();
    }
    if (e.key === 'ArrowRight') {
      currentModalIndex = (currentModalIndex + 1) % currentModalCount;
      updateImgModal();
    }
  });

  // Back button in gallery view
  document.getElementById('galleryBackBtn').onclick = function() {
    window.location.href = 'projects.html';
  };

  // Mobile menu logic
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDropdown = document.getElementById('mobileDropdown');
  const closeMobileMenu = document.getElementById('closeMobileMenu');
  
  function toggleMobileMenu(show) {
    if (show) {
      mobileDropdown.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDropdown.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  
  mobileMenuBtn.onclick = () => toggleMobileMenu(true);
  closeMobileMenu.onclick = () => toggleMobileMenu(false);
  
  // Hide menu on nav link click (for SPA feel)
  Array.from(mobileDropdown.querySelectorAll('a')).forEach(el => {
    el.onclick = () => toggleMobileMenu(false);
  });
  
  // Show/hide hamburger based on screen size
  function handleResize() {
    if (window.innerWidth <= 768) {
      mobileMenuBtn.style.display = 'flex';
    } else {
      mobileMenuBtn.style.display = 'none';
      mobileDropdown.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  
  window.addEventListener('resize', handleResize);
  handleResize();
}); 
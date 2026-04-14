// ===========================
// VIEWPORT BADGE
// ===========================
const viewportBadge = document.getElementById('viewport-badge');
const footerWidth = document.getElementById('footer-width');

function updateViewport() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const label = w + 'px × ' + h + 'px';
  viewportBadge.textContent = label;
  footerWidth.textContent = label;
}

updateViewport();
window.addEventListener('resize', updateViewport);

// ===========================
// DEVICE STATUS PILLS
// ===========================
const pillMobile  = document.getElementById('pill-mobile');
const pillTablet  = document.getElementById('pill-tablet');
const pillDesktop = document.getElementById('pill-desktop');

function updateDevicePills() {
  const w = window.innerWidth;
  pillMobile.classList.toggle('active', w <= 480);
  pillTablet.classList.toggle('active', w > 480 && w <= 768);
  pillDesktop.classList.toggle('active', w > 768);
}

updateDevicePills();
window.addEventListener('resize', updateDevicePills);

// ===========================
// NAVBAR HAMBÚRGUER (real)
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
});

// Fecha ao clicar num link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// ===========================
// DEMO HAMBÚRGUER (seção 3)
// ===========================
const demoHamburger  = document.getElementById('demo-hamburger');
const demoMenuOpen   = document.getElementById('demo-menu-open');
const hamburgerStatus = document.getElementById('hamburger-status');

demoHamburger.addEventListener('click', () => {
  const isOpen = demoMenuOpen.classList.toggle('open');
  demoHamburger.classList.toggle('open', isOpen);
  hamburgerStatus.textContent = isOpen ? '✅ Menu aberto' : 'Menu fechado';
});

// ===========================
// GRID INTERATIVO (seção 4)
// ===========================
const gridBtns       = document.querySelectorAll('.grid-btn');
const interactiveGrid = document.getElementById('interactive-grid');

gridBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    gridBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cols = btn.dataset.cols;
    interactiveGrid.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
  });
});
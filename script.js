// ===========================
// VIEWPORT & FOOTER
// ===========================
const viewportBadge = document.getElementById("viewport-badge");
const footerWidth = document.getElementById("footer-width");

function updateViewport() {
  const label = `${window.innerWidth}px × ${window.innerHeight}px`;
  viewportBadge.textContent = label;
  footerWidth.textContent = label;
}
window.addEventListener("resize", updateViewport);
updateViewport();

// ===========================
// SIMULADOR DE DISPOSITIVOS
// ===========================
const body = document.body;
const btnMobile = document.getElementById("pill-mobile");
const btnTablet = document.getElementById("pill-tablet");
const btnDesktop = document.getElementById("pill-desktop");

function setDevice(mode) {
  // Remove todas as classes de simulação
  body.classList.remove("is-mobile", "is-tablet", "is-desktop");
  btnMobile.classList.remove("active");
  btnTablet.classList.remove("active");
  btnDesktop.classList.remove("active");

  // Ativa a selecionada
  body.classList.add(`is-${mode}`);
  document.getElementById(`pill-${mode}`).classList.add("active");
}

btnMobile.addEventListener("click", () => setDevice("mobile"));
btnTablet.addEventListener("click", () => setDevice("tablet"));
btnDesktop.addEventListener("click", () => setDevice("desktop"));

// Auto-detectar no início baseado na largura real
if (window.innerWidth <= 600) setDevice("mobile");
else if (window.innerWidth <= 1024) setDevice("tablet");
else setDevice("desktop");

// ===========================
// NAVBAR PRINCIPAL
// ===========================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// ===========================
// DEMO HAMBURGER (SEÇÃO 3)
// ===========================
const demoBtn = document.getElementById("demo-hamburger");
const demoMenu = document.getElementById("demo-menu-open");
const demoStatus = document.getElementById("hamburger-status");

demoBtn.addEventListener("click", () => {
  const isOpen = demoMenu.classList.toggle("open");
  demoStatus.textContent = isOpen ? "✅ Menu aberto" : "Menu fechado";
  demoMenu.style.display = isOpen ? "flex" : "none";
  demoMenu.style.flexDirection = "column";
});

// ===========================
// GRID INTERATIVO (SEÇÃO 4)
// ===========================
const gridBtns = document.querySelectorAll(".grid-btn");
const interactiveGrid = document.getElementById("interactive-grid");

gridBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    gridBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    interactiveGrid.style.gridTemplateColumns = `repeat(${btn.dataset.cols}, 1fr)`;
  });
});

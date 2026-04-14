// ===========================
// DESKTOP VIEWPORT MONITOR
// ===========================
const viewportBadge = document.getElementById("viewport-badge");
const footerWidth = document.getElementById("footer-width");

function updateViewport() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const label = w + " × " + h + " PX";

  if (viewportBadge) viewportBadge.textContent = label;
  if (footerWidth) footerWidth.textContent = w + " PX";
}

// Executa no carregamento e no redimensionamento (apenas para atualizar o badge, não o layout)
window.addEventListener("load", updateViewport);
window.addEventListener("resize", updateViewport);

// Otimização para desktop: Adicionar hover effects complexos se necessário via JS,
// mas o CSS atual já resolve bem.

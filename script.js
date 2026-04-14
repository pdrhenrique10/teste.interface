const viewportBadge = document.getElementById("viewport-badge");
const footerWidth = document.getElementById("footer-width");

function updateViewport() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const text = `${w} × ${h} PX`;

  if (viewportBadge) viewportBadge.textContent = text;
  if (footerWidth) footerWidth.textContent = w + " PX";
}

window.addEventListener("resize", updateViewport);
updateViewport();

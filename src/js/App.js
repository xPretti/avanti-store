
let currentFooterSpoilerElement = null;

/**
 * Evento de click no spoiler do footer
 */
document.querySelectorAll(".footer-spoiler-btn").forEach((footerSpoiler) => {
  footerSpoiler.addEventListener("click", () => {
    const parent = footerSpoiler.parentElement;
    if (!parent) {
      return;
    }
    parent.classList.toggle("open");
    if (currentFooterSpoilerElement) {
      if (currentFooterSpoilerElement !== parent) {
        currentFooterSpoilerElement.classList.remove("open");
      }
    }
    currentFooterSpoilerElement = parent;
  });
});

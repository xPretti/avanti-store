// INPUTS
const inputSearchMessage = "Você buscou por: '{value}'";

// VARIABLES
let currentFooterSpoilerElement = null;
let currentOpenSearchContextElement = null;

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

/**
 * Evento de pesquisa do header
 */
function handleSubmit(event) {
   event.preventDefault();
   const form = event.target;
   if (form instanceof HTMLFormElement) {
      const input = form.querySelector(".searchInput");
      if (input instanceof HTMLInputElement) {
         const searchValue = input.value.trim();
         const parentElement = form.parentElement;
         if (!parentElement) {
            return;
         }
         const contextMenu = parentElement.querySelector(".search-context");
         if (!contextMenu) {
            return;
         }
         const resultElement = contextMenu.querySelector(".search-context-result");
         if (!resultElement) {
            return;
         }
         if (!searchValue) {
            if (currentOpenSearchContextElement === contextMenu) {
               currentOpenSearchContextElement.classList.remove("active");
               currentOpenSearchContextElement = null;
            }
            return;
         }
         const value = inputSearchMessage.replace("{value}", searchValue);
         if (!value) {
            return;
         }
         resultElement.textContent = value;
         contextMenu.classList.add("active");
         currentOpenSearchContextElement = contextMenu;
      }
   }
}
/**
 * Evento de click no documento
 */
document.addEventListener("click", (event) => {
   if (currentOpenSearchContextElement) {
      const parentElement = currentOpenSearchContextElement.parentElement;
      if (parentElement) {
         if (parentElement.contains(event.target)) {
            currentOpenSearchContextElement.classList.add("active");
            return;
         }
      }
      currentOpenSearchContextElement.classList.remove("active");
   }
});

/**
 * Evento de input
 */
document.addEventListener("input", (event) => {
   if (currentOpenSearchContextElement) {
      const parentElement = currentOpenSearchContextElement.parentElement;
      if (parentElement) {
         if (parentElement.contains(event.target)) {
            currentOpenSearchContextElement.classList.remove("active");
            currentOpenSearchContextElement = null;
            return;
         }
      }
   }
});

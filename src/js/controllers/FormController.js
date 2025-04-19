// INPUTS
const inputSearchMessage = "Você buscou por: '{value}'";

// VARIABLES
let currentOpenSearchContextElement = null;

export function handleSubmit(event) {
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

export function handleInput(event) {
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
}

export function handleClickDocument(event) {
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
}

import {loadDepartments} from "./controllers/DepartmentController.js";
import {handleClickSpoiler} from "./controllers/FooterSpoilerController.js";
import {handleClickDocument, handleInput, handleSubmit} from "./controllers/FormController.js";

/**
 * Carregadores
 */
loadDepartments();

/**
 * Evento de click no spoiler do footer
 */
document.querySelectorAll(".footer-spoiler-btn").forEach((footerSpoiler) => {
   footerSpoiler.addEventListener("click", () => {
      handleClickSpoiler(footerSpoiler);
   });
});

/**
 * Evento de pesquisa do header
 */
document.querySelectorAll(".search-form").forEach((form) => {
   form.addEventListener("submit", handleSubmit);
});

/**
 * Evento de click no documento
 */
document.addEventListener("click", (event) => {
   handleClickDocument(event);
});

/**
 * Evento de input
 */
document.addEventListener("input", (event) => {
   handleInput(event);
});

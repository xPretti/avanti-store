import {handleClickDocumentDepartment, handleExitDocumentDepartment, loadDepartments} from "./controllers/DepartmentController.js";
import {handleClickSpoiler} from "./controllers/FooterSpoilerController.js";
import {handleClickDocument, handleInput, handleSubmit} from "./controllers/FormController.js";
import {handleClickDocumentHamburger, handleExitDocumentHamburger} from "./controllers/HamburgerController.js";
import {addEventScroll, addEventScrollMobile, handleScroll} from "./controllers/ScrollController.js";

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
 * Evento do documento
 */
document.addEventListener("click", (event) => {
   handleClickDocument(event);
   handleClickDocumentDepartment(event);
   handleClickDocumentHamburger(event);
});
document.addEventListener("mousemove", (event) => {
   handleExitDocumentDepartment(event);
   handleExitDocumentHamburger(event);
});

/**
 * Evento de input
 */
document.addEventListener("input", (event) => {
   handleInput(event);
});

/**
 * Adiciona evento de scroll customizado
 */
document.querySelectorAll(".priority-scroll").forEach((object) => {
   addEventScroll(object);
});

document.querySelectorAll(".scroll.-mobile").forEach((object) => {
   addEventScrollMobile(object);
});

/**
 * Configuração do swiper
 */
// @ts-ignore
var swiper = new Swiper(".product-swiper", {
   slidesPerView: "auto",
   slidesPerGroup: 1,
   spaceBetween: 14,
   pagination: {
      el: ".products-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".products-button-next",
      prevEl: ".products-button-prev",
   },
   breakpoints: {
      570: {
         slidesPerGroup: 2,
      },
      828: {
         slidesPerGroup: 3,
      },
      1024: {
         slidesPerGroup: 4,
      },
      1300: {
         slidesPerGroup: 5,
      }
   },
});
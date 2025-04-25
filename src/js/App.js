import { getProductCardComp } from "./components/ProductCardComp.js";
import {handleClickDocumentDepartment, handleExitDocumentDepartment, loadDepartments} from "./controllers/DepartmentController.js";
import {handleClickSpoiler} from "./controllers/FooterSpoilerController.js";
import {handleClickDocument, handleInput, handleSubmit} from "./controllers/FormController.js";
import {handleClickDocumentHamburger, handleExitDocumentHamburger} from "./controllers/HamburgerController.js";
import {addEventScroll, addEventScrollMobile, handleScroll} from "./controllers/ScrollController.js";
import { productsData } from "./databases/ProductsData.js";

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
// const swiper = new Swiper(".product-swiper", {
//    slidesPerView: "auto",
//    slidesPerGroup: 1,
//    spaceBetween: 14,
//    pagination: {
//       el: ".products-pagination",
//       clickable: true,
//    },
//    navigation: {
//       nextEl: ".products-button-next",
//       prevEl: ".products-button-prev",
//    },
//    breakpoints: {
//       570: {
//          slidesPerGroup: 2,
//       },
//       828: {
//          slidesPerGroup: 3,
//       },
//       1024: {
//          slidesPerGroup: 4,
//       },
//       1300: {
//          slidesPerGroup: 5,
//       }
//    },
// });
document.querySelectorAll(".releases .products").forEach((carousel) => {
   // @ts-ignore
   const swiper = new Swiper(carousel.querySelector(".product-swiper"), {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 14,
      pagination: {
         el: carousel.querySelector(".products-pagination"),
         clickable: true,
      },
      navigation: {
         nextEl: carousel.querySelector(".products-button-next"),
         prevEl: carousel.querySelector(".products-button-prev"),
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
});


/**
 * Inicializador de produtos no carrousel
 */
const containerList = document.querySelectorAll(".releases-products-content");

containerList.forEach((container) => {
   const fragment = document.createDocumentFragment();
   const cards = [];

   // Adiciona os produtos ao fragmento e armazena os elementos
   productsData.forEach((product) => {
      const template = document.createElement("template");
      template.innerHTML = getProductCardComp(product.id).trim();
      const card = template.content.firstElementChild;

      if(card)
      {
         card.classList.add("visibility");
         cards.push(card);
         fragment.appendChild(card);
      }
   });

   container.appendChild(fragment);

   cards.forEach((card, i) => {
      setTimeout(() => {
         card.classList.add("on");
      }, i * 100);
   });
});
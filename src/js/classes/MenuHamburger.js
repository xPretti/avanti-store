import {getHamburgerComp} from "../components/HamburgerComp.js";
import {addEventScroll} from "../controllers/ScrollController.js";

export class MenuHamburger {
   #hamburgerElement;
   #dropdownElement;
   #dropdownContentElement;

   /**
    *
    * @param {HTMLElement} hamburgerElement Menu do hamburger
    * @param {HTMLElement} dropdownElement Menu dropdown
    * @param {HTMLElement} dropdownContentElement  Destino dos conteudos dentro do menu dropdown
    */
   constructor(hamburgerElement, dropdownElement, dropdownContentElement) {
      if (!hamburgerElement || !dropdownElement || !dropdownContentElement) {
         throw new Error("Todos os elementos DOM devem ser fornecidos e não podem ser null ou undefined.");
      }
      this.#hamburgerElement = hamburgerElement;
      this.#dropdownElement = dropdownElement;
      this.#dropdownContentElement = dropdownContentElement;
   }

   /**
    * Ação de hover
    */
   handleHover() {
      this.enableMenu();
   }

   /**
    * Ação de click
    */
   handleClick() {
      this.enableMenu();
   }

   /**
    * Ativa o menu dropdown
    */
   enableMenu() {
      this.#dropdownElement.classList.add("active");
      this.isOpen = true;
      this.#load();
   }

   disableMenu() {
      if (!this.isOpen) return;
      this.#dropdownElement.classList.remove("active");
      this.isOpen = false;
   }

   /**
    * Carrega os dados
    */
   #load() {
      if (!this.isOpen) return;
      const result = getHamburgerComp();
      if (!result) return;
      this.#dropdownContentElement.innerHTML = result;

      // Adiciona o travamento de scroll evitando o scroll de passar para o body 
      this.#dropdownElement.querySelectorAll(".priority-scroll").forEach((object) => {
         addEventScroll(object);
      });
   }
}

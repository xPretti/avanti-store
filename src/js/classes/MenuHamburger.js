import {getCategoryButtonsComp} from "../components/CategoriesComp.js";
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

      this.isOpen = false;
      this.currentSelectedDepartment = null;
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

   handleClickDepartment(id) {
      this.#loadCategory(id);
   }

   /**
    * Ativa o menu dropdown
    */
   enableMenu() {
      if(this.isOpen) return;
      this.#dropdownElement.classList.add("active");
      this.isOpen = true;
      this.#load();
      this.#hamburgerElement.classList.add("selected");
   }

   disableMenu() {
      if (!this.isOpen) return;
      this.#dropdownElement.classList.remove("active");
      this.isOpen = false;
      this.#hamburgerElement.classList.remove("selected");
   }

   /**
    * Carrega os dados
    */
   #load() {
      if (!this.isOpen) return;
      const result = getHamburgerComp(this.handleClickDepartment);
      if (!result) return;
      this.#dropdownContentElement.innerHTML = result;

      // Adiciona o travamento de scroll evitando o scroll de passar para o body
      this.#dropdownElement.querySelectorAll(".priority-scroll").forEach((object) => {
         addEventScroll(object);
      });

      // Adiciona o evento de click nos departamentos
      const departmentElements = this.#dropdownContentElement.querySelectorAll(".dropdown-hamburger-department");
      departmentElements.forEach((obj) => {
         const id = obj.getAttribute("data-department-id");
         obj.addEventListener("click", () => this.handleClickDepartment(id));
      });

      // Adiciona o conteudo do hamburger
      this.hamburgerCategoriesContent = this.#dropdownContentElement.querySelector(".dropdown-categories-content");

      this.#loadCategory(0);
   }

   #loadCategory(id) {
      if (!this.hamburgerCategoriesContent) return;
      this.hamburgerCategoriesContent.innerHTML = getCategoryButtonsComp(id);
      const departmentElements = this.#dropdownContentElement.querySelectorAll(".dropdown-hamburger-department");
      for (const obj of departmentElements) {
         const objId = obj.getAttribute("data-department-id");
         if (!objId) return;
         if (id == objId && obj != this.currentSelectedDepartment) {
            this.currentSelectedDepartment?.classList.remove("active");
            obj.classList.add("active");
            this.currentSelectedDepartment = obj;
            break;
         }
      }
   }
}

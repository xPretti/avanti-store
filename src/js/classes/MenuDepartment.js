import {getCategoriesComp} from "../components/CategoriesComp.js";

export class MenuDepartment {
   #menuElement;
   #menuContentElement;

   /**
    *
    * @param {HTMLElement} menuElement Menu dropdown dos departamentos.
    * @param {HTMLElement} menuContentElement  Destino dos departamentos, onde serão inseridos.
    */
   constructor(menuElement, menuContentElement) {
      if (!menuElement || !menuContentElement) {
         throw new Error("Todos os elementos DOM devem ser fornecidos e não podem ser null ou undefined.");
      }

      this.#menuElement = menuElement;
      this.#menuContentElement = menuContentElement;
   }

   /**
    * Ação de hover no departamento.
    * @param {HTMLElement} department
    */
   handleHover(department) {
      if (!department) return;
      this.enableMenu(department);
   }

   /**
    * Ação de click no departamento.
    * @param {HTMLElement} department
    */
   handleClick(department) {
      if (!department) return;
      this.enableMenu(department);
   }

   /**
    *
    * @param {HTMLElement} department Ativa o menu dropdown do departamento.
    */
   enableMenu(department) {
      if (this.currentElement && this.currentElement === department) return;
      if (!department) {
         this.disableMenu();
         return;
      }
      this.#menuElement.classList.add("active");
      this.currentElement = department;
      this.#load();
   }

   disableMenu() {
      if (!this.currentElement) return;
      this.#menuElement.classList.remove("active");
      this.currentElement = null;
   }

   /**
    * Carrega os dados do departamento atual.
    */
   #load() {
      if (!this.currentElement) return;
      const id = this.getDepartmentId();
      if (id === -1) return;
      const result = getCategoriesComp(id);
      if (!result) return;
      this.#menuContentElement.innerHTML = result;
   }

   /**
    *
    * @returns {number} ID do departamento atual
    */
   getDepartmentId() {
      if (!this.currentElement) return -1;
      const id = this.currentElement.getAttribute("data-id");
      if (!id) return -1;
      return parseInt(id);
   }
}

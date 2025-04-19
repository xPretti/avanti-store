import {Department} from "./Department.js";

export class Departments {
   #departments = [];

   /**
    * @param {Department[]} [departments=[]]
    */
   constructor(departments = []) {
      this.#departments = [...departments];
   }

   /**
    * @param {Department} department
    */
   add(department) {
      if (this.#departments.find((d) => d.getId() === department.getId())) {
         return false;
      }
      this.#departments.push(department);
      return true;
   }

   /**
    * 
    * @param {number} id 
    */
   remove(id) {
      this.#departments = this.#departments.filter((d) => d.id !== id);
   }

   /**
    * 
    * @param {number} id 
    */
   get(id) {
      return this.#departments.find((d) => d.id === id);
   }

   getDepartments() {
      return this.#departments;
   }

   count() {
      return this.#departments.length;
   }
}

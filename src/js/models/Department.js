export class Department {
    #id;
    #name;
    #categories = [];
 
    constructor(id, name, categories = []) {
       this.#id = id;
       this.#name = name;
       this.#categories = [...categories];
    }
 
    getId() {
       return this.#id;
    }
 
    getName() {
       return this.#name;
    }
 
    getCategories() {
       return this.#categories;
    }
 }
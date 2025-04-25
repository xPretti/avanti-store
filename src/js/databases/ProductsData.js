class Product {
   constructor(id) {
      this.id = id;
   }
}

export const productsData = Array.from({length: 15}, (_, index) => new Product(index));

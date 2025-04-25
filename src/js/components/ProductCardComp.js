import {html} from "../utils/HtmlUtils.js";

export function getProductCardComp(id) {
   // Variáveis para fácil implementação futura
   const news = "NOVO";
   const discount = "10% OFF";
   const installment = "Ou em até <span>10x de R$ 7,90</span>";
   const decription = "Lorem ipsum dolor sit amet amet consectetuer adipiscing elit";
   const value = "R$ 79,90";
   const valueWithoutDiscount = "R$ 100,00";
   const buyBtn = "Comprar";

   return html`
      <div class="swiper-slide">
         <div class="product-card" data-id="${id}">
            <div class="product-card-content">
               <div class="product-card-news">
                  <h3>${news}</h3>
               </div>
               <img class="product-card-image" src="assets/products/camisa.png" alt="Camisa Polo" draggable="false" />
               <div class="product-card-description-container">
                  <h3 class="product-card-decription">${decription}</h3>
                  <div class="product-card-price-container">
                     <div class="product-card-price">
                        <h4 class="product-card-value-without-discount">${valueWithoutDiscount}</h4>
                        <h4 class="product-card-value">${value}</h4>
                     </div>
                     <div class="product-card-discont">
                        <h3>${discount}</h3>
                     </div>
                  </div>
                  <p class="product-card-installment">${installment}</p>
                  <button class="product-card-buy-btn">${buyBtn}</button>
               </div>
            </div>
         </div>
      </div>
   `;
}

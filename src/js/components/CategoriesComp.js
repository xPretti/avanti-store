import {departmentsData} from "../databases/DepartmentsData.js";
import {Department} from "../models/Department.js";
import {html} from "../utils/HtmlUtils.js";

export function getCategoriesComp(id) {
   /** @type {Department} */
   const department = departmentsData.get(id);

   if (!department) return;

   const categories = department.getCategories();
   
   return html`
      <div class="dropdown-categories-container">
         <div class="dropdown-department">
            <h2>${department.getName()}</h2>
            <div class="dropdown-categories">
               <div class="dropdown-categories-content">${getCategoryButtons(categories)}</div>
            </div>
         </div>
      </div>
   `;
}

function getCategoryButtons(categories) {
   return categories.map((category) => html` <button class="dropdown-category-btn">${category}</button> `).join("");
}

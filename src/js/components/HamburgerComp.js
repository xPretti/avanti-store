import {departmentsData} from "../databases/DepartmentsData.js";
import {Department} from "../models/Department.js";
import {html} from "../utils/HtmlUtils.js";

export function getHamburgerComp() {
   return html`
      <div class="dropdown-hamburger-departments-container">
         <div class="dropdown-hamburger-departments">
            <div class="dropdown-hamburger-departments-content">
               <ol class="priority-scroll dropdown-hamburger-departments-list">
                  ${getDepartments()}
               </ol>
            </div>
         </div>
         <div class="dropdown-hamburger-departments-categories">
            <div class="dropdown-department">
               <div class="dropdown-categories">
                  <div class="dropdown-categories-content"></div>
               </div>
            </div>
         </div>
      </div>
   `;
}

// function getCategoryButtons(categories) {
//    return categories.map((category) => html` <button class="dropdown-category-btn">${category}</button> `).join("");
// }

function getDepartments() {
   let result = "";
   for (let i = 0; i < departmentsData.count(); i++) {
      const department = departmentsData.get(i);
      result += html`
         <div class="dropdown-hamburger-department" data-department-id="${department.getId()}">
            <p>${department.getName()}</p>
            <i class="bi bi-chevron-right"></i>
         </div>
      `;
   }
   return result;
}

import {Department} from "../models/Department.js";

/**
 * @param {Department} department
 */
export function getDepartmentComp(department) {
   return `
        <li class="department" data-id="${department.getId()}">
            <button title="${department.getName()}">
                ${department.getName()}
            </button>
        </li>
    `;
}

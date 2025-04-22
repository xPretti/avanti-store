import {Department} from "../models/Department.js";
import { html } from "../utils/HtmlUtils.js";

/**
 * @param {Department} department
 */
export function getDepartmentComp(department) {
   return html`
        <li class="department" data-id="${department.getId()}">
            <button title="${department.getName()}">
                ${department.getName()}
            </button>
        </li>
    `;
}

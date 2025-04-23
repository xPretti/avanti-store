import {getDepartmentComp} from "../components/DepartmentComp.js";
import {departmentsData} from "../databases/DepartmentsData.js";
import {Department} from "../models/Department.js";
import {MenuDepartment} from "../classes/MenuDepartment.js";

const departmentsContainer = document.getElementById("departments-content");
const dropdownMenu = document.getElementById("dropdown"); //
const dropdownMenuContainer = document.getElementById("dropdown-content"); //
const departments = document.getElementById("departments"); //

let departmentMenu = undefined;
if (dropdownMenu && dropdownMenuContainer) {
   departmentMenu = new MenuDepartment(dropdownMenu, dropdownMenuContainer);
}

export function loadDepartments() {
   if (!departmentsContainer) {
      return;
   }
   let result = "";
   const size = Math.min(8, departmentsData.count());
   const departmentsValues = departmentsData.getDepartments();
   for (let i = 0; i < size; i++) {
      const vl = departmentsValues[i];
      if (vl instanceof Department) {
         result += getDepartmentComp(vl);
      }
   }
   departmentsContainer.innerHTML = result;
   loadDepartmentsEvent();
}

function loadDepartmentsEvent() {
   document.querySelectorAll(".department").forEach((department) => {
      department.addEventListener("click", () => {
         departmentMenu && departmentMenu.handleClick(department);
      });
      department.addEventListener("mouseover", () => {
         departmentMenu && departmentMenu.handleClick(department);
      });
   });
}

export function handleExitDocumentDepartment(event) {
   if (!departmentMenu || !event) return;
   if (departments && dropdownMenu) {
      if (departments.contains(event.target) || dropdownMenu.contains(event.target)) return;
   }
   departmentMenu.disableMenu();
}

export function handleClickDocumentDepartment(event) {
   if (!departmentMenu || !event) return;

   if (departments && dropdownMenu) {
      if (departments.contains(event.target) || dropdownMenu.contains(event.target)) return;
   }
   departmentMenu.disableMenu();
}

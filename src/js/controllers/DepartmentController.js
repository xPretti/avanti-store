import {getDepartmentComp} from "../components/DepartmentComp.js";
import { getCategoriesComp } from "../components/CategoriesComp.js";
import {departmentsData} from "../databases/DepartmentsData.js";
import {Department} from "../models/Department.js";

let currentMenuElement = null;
const departmentsContainer = document.getElementById("departments");
const dropdownMenu = document.getElementById("dropdown");
const dropdownMenuContainer = document.getElementById("dropdown-content");
const navbar = document.getElementById("navbar");

export function loadDepartments() {
   if (!departmentsContainer) {
      return;
   }
   let result = "";
   const size = Math.min(8, departmentsData.count());
   const departments = departmentsData.getDepartments();
   for (let i = 0; i < size; i++) {
      const vl = departments[i];
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
         handleClickDepartment(department);
      });
      department.addEventListener("mouseover", () => {
         handleEntryDepartment(department);
      });
   });
}

function handleClickDepartment(department) {
   if (!dropdownMenu || !dropdownMenuContainer || !department) return;
   // if (currentMenuElement && currentMenuElement === department) {
   //    disableMenu();
   //    return;
   // }
   if (!currentMenuElement || (currentMenuElement && currentMenuElement !== department)) {
      enableMenu(department);
      loadCategory(department.getAttribute("data-id"));
      return;
   }
}

function handleEntryDepartment(department) {
   if (!dropdownMenu || !dropdownMenuContainer || !department) return;
   enableMenu(department);
   loadCategory(department.getAttribute("data-id"));
}

export function handleExitDocumentDepartment(event) {
   if (!currentMenuElement || !dropdownMenu || !dropdownMenuContainer || !event) return;
   if (navbar) {
      if (navbar.contains(event.target)) return;
   }
   disableMenu();
}

export function handleClickDocumentDepartment(event) {
   if (!currentMenuElement || !dropdownMenu || !dropdownMenuContainer || !event) return;

   if (navbar) {
      if (navbar.contains(event.target)) return;
   }
   disableMenu();
}

function disableMenu() {
   if (!dropdownMenu || !dropdownMenuContainer) return;
   dropdownMenu.classList.remove("active");
   dropdownMenuContainer.innerHTML = "";
   currentMenuElement = null;
}

function enableMenu(department) {
   if (!dropdownMenu || !dropdownMenuContainer || !department) return;
   dropdownMenu.classList.add("active");
   currentMenuElement = department;
}

function loadCategory(id) {
   if (!id || !dropdownMenuContainer) return;
   
   const result = getCategoriesComp(id);
   if (!result) return;
   dropdownMenuContainer.innerHTML= result;
}

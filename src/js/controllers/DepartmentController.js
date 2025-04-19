import {getDepartmentComp} from "../components/DepartmentComp.js";
import {departmentsData} from "../databases/DepartmentsData.js";
import {Department} from "../models/Department.js";

const departmentsContainer = document.getElementById("departments");

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
}

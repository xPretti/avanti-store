import {Department} from "../models/Department.js";
import {Departments} from "../models/Departments.js";

export const departmentsData = new Departments();

// Inserir departamentos com loop
for (let i = 0; i < 30; i++) {
   const categories = [];
   for (let c = 0; c < 24; c++) {
      categories.push("Categoria");
   }
   departmentsData.add(new Department(i, "Departamento", categories));
}

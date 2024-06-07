import { Consultorio } from "./Consultorio";
import { Hospital } from "./Hospital";
import { Medico } from "./Medico";

const medico1 = new Medico('Dr. Leonora López', 45, 25896, 'Cardiología');
const medico2 = new Medico('Dr. Bruno Sanchez', 35, 58974, 'Traumatología');
const medico3 = new Medico('Dr. Paz Santangelo', 35, 58724, 'Traumatología');
const medico4 = new Medico('Dr. Alberto Cosciutto', 65, 3000, 'Urología');

console.log("\nMedicos de la clase Medico:");
console.log(medico1);
console.log(medico2);


console.log("\nImprimiendo datos de la Clase Consultorio con datos de Medico");
const consultorio1 = new Consultorio(1, medico1);
consultorio1.mostrarMedico();


console.log("\nImprimiendo desde la clase Hospital, con un vector de tipo Medico");
const hospital1 = new Hospital("Sanatorio Allende", "Independencia 500");
hospital1.agregarMedicos(medico3);
hospital1.agregarMedicos(medico4);
console.log(hospital1);

import { Persona } from "./Persona";

/* HERENCIA */
export class Medico extends Persona {
    matricula: number;
    especialidad: string;

    constructor(nombreCompleto: string, edad: number, matricula: number, especialidad: string) {
        super(nombreCompleto, edad);
        this.matricula = matricula;
        this.especialidad = especialidad;
    }

    tratarPaciente() {
        console.log(`El doctor ${this.nombreCompleto} está tratando a un paciente.`);
    }
}
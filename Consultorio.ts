import { Medico } from "./Medico";

/* COMPOSICIÓN */
export class Consultorio {
    numeroConsultorio: number;
    medico: Medico;

    constructor(numeroConsultorio: number, medico: Medico) {
        this.numeroConsultorio = numeroConsultorio;
        this.medico = medico;
    }

    mostrarMedico() {
        console.log(`El médico del consultorio n° ${this.numeroConsultorio} es ${this.medico.nombreCompleto}, especializado en ${this.medico.especialidad}`);
    }
}
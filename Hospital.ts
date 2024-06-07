import { Medico } from "./Medico";

/* AGREGACIÓN */
export class Hospital {
    nombre: string;
    direccion: string;
    medicos: Medico[];

    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.medicos = [];
    }

    agregarMedicos(medico: Medico) {
        this.medicos.push(medico);
    }

    mostrarMedicos() {
        this.medicos.forEach(medico => {
            console.log(`Medico: ${medico.nombreCompleto}, Especialidad: ${medico.especialidad}`);
        });
    }
}
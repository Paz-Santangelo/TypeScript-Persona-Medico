"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consultorio = void 0;
/* COMPOSICIÓN */
class Consultorio {
    constructor(numeroConsultorio, medico) {
        this.numeroConsultorio = numeroConsultorio;
        this.medico = medico;
    }
    mostrarMedico() {
        console.log(`El médico del consultorio n° ${this.numeroConsultorio} es ${this.medico.nombreCompleto}, especializado en ${this.medico.especialidad}`);
    }
}
exports.Consultorio = Consultorio;

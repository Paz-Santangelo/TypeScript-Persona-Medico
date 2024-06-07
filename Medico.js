"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medico = void 0;
const Persona_1 = require("./Persona");
/* HERENCIA */
class Medico extends Persona_1.Persona {
    constructor(nombreCompleto, edad, matricula, especialidad) {
        super(nombreCompleto, edad);
        this.matricula = matricula;
        this.especialidad = especialidad;
    }
    tratarPaciente() {
        console.log(`El doctor ${this.nombreCompleto} está tratando a un paciente.`);
    }
}
exports.Medico = Medico;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hospital = void 0;
/* AGREGACIÓN */
class Hospital {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.medicos = [];
    }
    agregarMedicos(medico) {
        this.medicos.push(medico);
    }
    mostrarMedicos() {
        this.medicos.forEach(medico => {
            console.log(`Medico: ${medico.nombreCompleto}, Especialidad: ${medico.especialidad}`);
        });
    }
}
exports.Hospital = Hospital;

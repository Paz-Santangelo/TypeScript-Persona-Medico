"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombreCompleto, edad) {
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombreCompleto}`);
    }
}
exports.Persona = Persona;

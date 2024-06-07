export class Persona {
    nombreCompleto: string;
    edad: number;

    constructor(nombreCompleto: string, edad: number) {
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombreCompleto}`);
    }
}
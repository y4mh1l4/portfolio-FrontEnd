export class Capacitacion {
    id?: number;
    imagen: string;
    fecha: string;
    curso: string;

    constructor(imagen: string, fecha: string, curso: string) {
        this.imagen = imagen;
        this.fecha = fecha;
        this.curso = curso;
}
}

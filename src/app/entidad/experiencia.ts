export class Experiencia {
    id?: number;
    empresa: string;
    puesto: string;
    descripcion: string;
    logo: string;
    fechainicio: string;
    fechafinal: string;

    constructor( empresa: string, puesto: string, descripcion: string, 
        logo: string, fechainicio: string, fechafinal: string) {
        this.empresa = empresa;
        this.puesto = puesto;
        this.descripcion = descripcion;
        this.descripcion = descripcion;
        this.logo = logo;
        this.fechainicio = fechainicio;
        this.fechafinal = fechafinal;
    }
}

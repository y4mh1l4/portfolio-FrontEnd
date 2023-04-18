export class Formacion {
    id!: number;
    institucion: string;
    logo: string;
    fechainicio: string;
    fechafinal: string;
    descripcion: string;

    constructor(institucion: string, logo: string, fechafinal: string, 
        descripcion: string) {
            this.institucion = institucion;
            this.logo = logo;
            this.fechainicio = fechafinal;
            this.fechafinal = fechafinal;
            this.descripcion = descripcion;
        }
}

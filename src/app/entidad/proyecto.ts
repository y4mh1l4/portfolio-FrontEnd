export class Proyecto {
    id? : number;
    subtitulo: string;
    imagen: string;
    fecha: string;
    descripcion: string;
    enlace: string;

    constructor(subtitulo: string,imagen: string,fecha: string, descripcion: string, enlace: string) {
        this.subtitulo = subtitulo;
        this.imagen = imagen;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.enlace = enlace;
    }

}

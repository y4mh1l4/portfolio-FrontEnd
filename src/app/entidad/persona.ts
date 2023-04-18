export class Persona {
     id?: number;
     foto: string;
     perfil: string;
     nombre: string;
     apellido: string;
     profesion: string;
     email: string;
     clave: string;

     constructor(foto: string, perfil: string, nombre: string, apellido: string, profesion: string, email: string, clave: string){
        this.foto = foto;
        this.perfil = perfil;
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.email = email;
        this.clave = clave;
     }
}

import { Component } from '@angular/core';
import { Persona } from 'src/app/entidad/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-adminperfil',
  templateUrl: './adminperfil.component.html',
  styleUrls: ['./adminperfil.component.css']
})
export class AdminperfilComponent {
   //esto es para traer distintos datos
   profile : Persona[] = [];
   //otros datos simples
   id?: number;
  
 
   constructor(private sPersona: PersonaService){ }
   
   ngOnInit(): void {
    this.cargarPersona();
   }

   public cargarPersona(): void {
    this.sPersona.verPersonas().subscribe(
      data => {this.profile=data});
    }

    borrar(id: number) {
      if(id != undefined){
      this.sPersona.eliminarPersona(id).subscribe(
        data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarPersona();
        },
        error => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarPersona();
        }
      )
    }
} 

}

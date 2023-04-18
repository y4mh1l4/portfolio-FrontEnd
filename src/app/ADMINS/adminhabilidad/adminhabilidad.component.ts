import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/entidad/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-adminhabilidad',
  templateUrl: './adminhabilidad.component.html',
  styleUrls: ['./adminhabilidad.component.css']
})
export class AdminhabilidadComponent implements OnInit{
   //esto es para traer distintos datos
   habi : Habilidad[]=[];
   id?: number;

   constructor(private sHabilidad:HabilidadService){ }
 
   ngOnInit(): void {
    this.cargarHabilidad();
   }

   public cargarHabilidad(): void {
    this.sHabilidad.verHabilidades().subscribe(
      data => {this.habi=data});
    }

    borrar(id: number) {
      if(id != undefined){
      this.sHabilidad.eliminarHabilidad(id).subscribe(
        data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarHabilidad();
        },
        error => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarHabilidad();
        }
      )
    }
} 

}

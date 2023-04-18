import { Component, OnInit } from '@angular/core';
import { Capacitacion } from 'src/app/entidad/capacitacion';
import { CapacitacionService } from 'src/app/servicios/capacitacion.service';

@Component({
  selector: 'app-admincursos',
  templateUrl: './admincursos.component.html',
  styleUrls: ['./admincursos.component.css']
})
export class AdmincursosComponent implements OnInit{
   //esto es para traer distintos datos
   cursos : Capacitacion[]=[];
   id?: number;

   constructor(private sCapacitacion:CapacitacionService){ }
 
   ngOnInit(): void {
     this.cargarCapacitacion();
   }

   public cargarCapacitacion(): void {
    this.sCapacitacion.verCapacitaciones().subscribe(
      data => {this.cursos=data});
    }

    borrar(id: number) {
      if(id != undefined){
      this.sCapacitacion.eliminarCapacitacion(id).subscribe(
        data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarCapacitacion();
        },
        error => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarCapacitacion();
        }
      )
    }
  }

}

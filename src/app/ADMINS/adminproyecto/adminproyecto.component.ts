import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/entidad/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-adminproyecto',
  templateUrl: './adminproyecto.component.html',
  styleUrls: ['./adminproyecto.component.css']
})
export class AdminproyectoComponent implements OnInit{
    //esto es para traer distintos datos
    project : Proyecto[]=[];
    id?: number;

    constructor(private sProyecto: ProyectoService){ }
  
    ngOnInit(): void {
      this.cargarProyecto();
    }

    public cargarProyecto(): void {
      this.sProyecto.verProyectos().subscribe(
        data => {this.project=data});
      }

      borrar(id: number) {
        if(id != undefined){
        this.sProyecto.eliminarProyecto(id).subscribe(
          data => {
            alert("se pudo eliminar satisfactoriamente");
            this.cargarProyecto();
          },
          error => {
            alert("se pudo eliminar satisfactoriamente");
            this.cargarProyecto();
          }
        )
      }
  } 

}

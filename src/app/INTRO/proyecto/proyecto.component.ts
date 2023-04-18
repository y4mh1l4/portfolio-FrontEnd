import { Component } from '@angular/core';
import { Proyecto } from 'src/app/entidad/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
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

}

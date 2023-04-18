import { Component } from '@angular/core';
import { Capacitacion } from 'src/app/entidad/capacitacion';
import { CapacitacionService } from 'src/app/servicios/capacitacion.service';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.css']
})
export class CapacitacionComponent {
  //esto es para traer distintos datos
  cursos : Capacitacion[]=[];
  id?: number;
 
  constructor(private sCapacitacion: CapacitacionService){ }

  ngOnInit(): void {
    this.cargarCapacitacion();
  }

  public cargarCapacitacion(): void {
    this.sCapacitacion.verCapacitaciones().subscribe(
      data => {this.cursos=data});
    }

}

import { Component } from '@angular/core';
import { Formacion } from 'src/app/entidad/formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  //esto es para traer distintos datos
educacion: Formacion[]=[];
id?: number;

  constructor(private sFormacion:FormacionService){ }

  ngOnInit(): void {
    this.cargarFormacion();
  }

  public cargarFormacion(): void {
    this.sFormacion.verFormaciones().subscribe(
      data => {this.educacion=data});
    }

}

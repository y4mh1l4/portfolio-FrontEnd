import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entidad/experiencia';
import { DatosService } from 'src/app/servicios/datos.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
   //esto es para traer distintos datos
  experto: Experiencia[]=[];
  id?: number;
 

  constructor(private sExperiencia: ExperienciaService){ }

  ngOnInit(): void {
    this.cargarExperiencia();
    
  }

  public cargarExperiencia(): void{
    this.sExperiencia.verExperiencias().subscribe(
      data => {this.experto=data});
      }

}

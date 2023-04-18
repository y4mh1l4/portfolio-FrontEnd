import { Component } from '@angular/core';
import { Habilidad } from 'src/app/entidad/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
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
}

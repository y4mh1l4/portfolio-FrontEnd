import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/entidad/formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';

@Component({
  selector: 'app-admineducacion',
  templateUrl: './admineducacion.component.html',
  styleUrls: ['./admineducacion.component.css']
})
export class AdmineducacionComponent implements OnInit{
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

    borrar(id: number) {
      if(id != undefined){
      this.sFormacion.eliminarFormacion(id).subscribe(
        data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarFormacion();
        },
        error => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarFormacion();
        }
      )
    }
} 

}


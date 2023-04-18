import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/entidad/experiencia';


@Component({
  selector: 'app-adminexpe',
  templateUrl: './adminexpe.component.html',
  styleUrls: ['./adminexpe.component.css']
})
export class AdminexpeComponent implements OnInit{

  experto: Experiencia[]=[];
  id?: number;
 
  constructor(private router: Router,
    private sExperiencia: ExperienciaService) { }


  ngOnInit(): void {
    this.cargarExperiencia();
   
  }

 public cargarExperiencia(): void{
  this.sExperiencia.verExperiencias().subscribe(
    data => {this.experto=data});
    }
    

    borrar(id: number) {
      if(id != undefined){
      this.sExperiencia.eliminarExperiencia(id).subscribe(
        data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarExperiencia();
        },
        error => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarExperiencia();
        }
      )
    }
} 
}



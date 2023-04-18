import { Component } from '@angular/core';
import { Persona } from 'src/app/entidad/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  //esto es para traer distintos datos
  profile : Persona[] = [];
  //otros datos simples
  id?: number;
 

  constructor(private sPersona: PersonaService){ }

  ngOnInit(): void {
    this.cargarPersona();
  }

  public cargarPersona(): void {
    this.sPersona.verPersonas().subscribe(
      data => {this.profile=data});
    }

}

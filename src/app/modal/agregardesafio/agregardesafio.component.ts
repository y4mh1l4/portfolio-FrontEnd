import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Proyecto } from 'src/app/entidad/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-agregardesafio',
  templateUrl: './agregardesafio.component.html',
  styleUrls: ['./agregardesafio.component.css']
})
export class AgregardesafioComponent implements OnInit {
  project : Proyecto[]=[];
  id?: number;
  Form: FormGroup;

  get subtitulo() { return this.Form.controls['subtitulo']; }
  get imagen() { return this.Form.controls['imagen']; }
  get fecha() { return this.Form.controls['fecha']; }
  get descripcion() { return this.Form.controls['descripcion']; }
  get enlace() { return this.Form.controls['enlace']; }

 
  //inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sProyecto: ProyectoService
  ) { 
    this.Form = this.formBuilder.group({
      id: [''],
      subtitulo: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      enlace: ['', [Validators.required]],  
    })
  }

  ngOnInit(): void {
  }

  onCreate(): void{
    this.sProyecto.agregrarProyecto(this.Form.value).subscribe(
      data=>{alert("Nueva Proyecto fue añadida correctamente")
      window.location.reload();
    })
    }

    onEnviar(event: Event) {
      if(this.Form.valid){
        this.onCreate();
        alert("Nueva Proyecto fue añadida correctamente");
        window.location.reload();
    }

  else{
    this.Form.markAllAsTouched();
    alert("error al servicio");
  }
}

refrescar(){
  this.Form.reset()
}  

}

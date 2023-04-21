import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/entidad/formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';

@Component({
  selector: 'app-agregarformacion',
  templateUrl: './agregarformacion.component.html',
  styleUrls: ['./agregarformacion.component.css']
})
export class AgregarformacionComponent implements OnInit {
  educacion: Formacion[]=[]
  id?: number;
  Form: FormGroup;

  get institucion() { return this.Form.controls['institucion']; }
  get logo() { return this.Form.controls['logo']; }
  get fechainicio() { return this.Form.controls['fechainicio']; }
  get fechafinal() { return this.Form.controls['fechafinal']; }
  get descripcion() { return this.Form.controls['descripcion']; }
 

  //inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private sFormacion:FormacionService

  ) { 
    this.Form = this.formBuilder.group({
      institucion: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      fechainicio: ['', [Validators.required]],
      fechafinal: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  onCreate(): void{
    this.sFormacion.agregarFormacion(this.Form.value).subscribe(
      data=>{alert("Nueva Formacion fue añadida correctamente")
      window.location.reload();
    })
    }

  onEnviar(event: Event) {
    if(this.Form.valid){
      this.onCreate();
      alert("Nueva Formacion fue añadida correctamente");
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
import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/entidad/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-agregarexpe',
  templateUrl: './agregarexpe.component.html',
  styleUrls: ['./agregarexpe.component.css']
})
export class AgregarexpeComponent implements OnInit{
  experto: Experiencia[]=[];
  id?: number;
  Form: FormGroup;

  get empresa() { return this.Form.controls['empresa']; }
  get puesto() { return this.Form.controls['puesto']; }
  get descripcion() { return this.Form.controls['descripcion']; }
  get fechainicio() { return this.Form.controls['fechainicio']; }
  get fechafinal() { return this.Form.controls['fechafinal']; }
  get logo() { return this.Form.controls['logo']; }
  
 
  //inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder, 
    private sExperiencia: ExperienciaService,
    private router:Router
  ) { 
    this.Form = this.formBuilder.group({
      empresa: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fechainicio: ['', [Validators.required]],
      fechafinal: ['', [Validators.required]],
      logo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onCreate(): void{
    this.sExperiencia.agregarExperiencia(this.Form.value).subscribe(
      data=>{alert("Nueva Experiencia fue añadida correctamente")
      window.location.reload();
    })
    }

  onEnviar() {
    if(this.Form.valid){
      this.onCreate();
      alert("Nueva Experiencia fue añadida correctamente");
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


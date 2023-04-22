import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formacion } from 'src/app/entidad/formacion';
import { FormacionService } from 'src/app/servicios/formacion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  educacion: Formacion[]=[];
  Form: FormGroup;
  formaciones!: Formacion;
  id?: number;

  get institucion() { return this.Form.controls['institucion']; }
  get logo() { return this.Form.controls['logo']; }
  get fechainicio() { return this.Form.controls['fechainicio']; }
  get fechafinal() { return this.Form.controls['fechafinal']; }
  get descripcion() { return this.Form.controls['descripcion']; }
 

  //inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sFormacion:FormacionService,
    private router:Router, 
    private activatedRoute:ActivatedRoute
  ) { 
    this.Form = this.formBuilder.group({
      id: [''],
      institucion: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      fechainicio: ['', [Validators.required]],
      fechafinal: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sFormacion.verFormacion(id).subscribe(data => {
      this.formaciones=data
    },error =>{
      alert("Error al cargar datos");
      this.router.navigate(['/dashboard']);
    }
    )
  }

  onUpdate():void{
    this.sFormacion.modificarFormacion(this.Form.value).subscribe(
     data => { alert("Formacion modificada.")});
     this.router.navigate(['/dashboard']);
 }
  

  onEnviar(event: Event) {
    event.preventDefault;
  if (this.Form.valid){
    alert("Formacion modificada.");
    this.onUpdate();
    window.location.reload();
  }else{
    alert("falló en la carga, intente nuevamente");
    this.Form.markAllAsTouched();
  }
}

salir(){
  this.router.navigate(['/dashboard']);
}

refrescar(){
  this.Form.reset()
}
 
}

import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/entidad/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-perfiladm',
  templateUrl: './perfiladm.component.html',
  styleUrls: ['./perfiladm.component.css']
})
export class PerfiladmComponent implements OnInit {
profile : Persona[] = [];
Form: FormGroup;
id?: number;
persona!: Persona;

get perfil() { return this.Form.controls['perfil']; }
get foto() { return this.Form.controls['foto']; }
get nombre() { return this.Form.controls['nombre']; }
get apellido() { return this.Form.controls['apellido']; }
get profesion() { return this.Form.controls['profesion']; }
 
  //inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sPersona: PersonaService,
    private router:Router, 
    private activatedRoute:ActivatedRoute
  ) {
    this.Form =this.formBuilder.group({
      id: [''],
      perfil: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      profesion: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPersona.verPersona(id).subscribe(data => {
      this.persona=data
    },error =>{
      alert("Error al cargar datos");
      this.router.navigate(['/dashboard']);
    }
    )
  }

  onUpdate():void{
    this.sPersona.modificarPersona(this.Form.value).subscribe(
     data => { alert("El Perfi fue modificada.")});
     this.router.navigate(['/dashboard']);
 }


 onEnviar(event: Event) {
  event.preventDefault;
if (this.Form.valid){
  alert("El Perfi fue modificada.");
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

import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/entidad/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  habi : Habilidad[]=[];
   id?: number;
   Form: FormGroup;
  habilidades!: Habilidad;

  get porcentaje() { return this.Form.controls['porcentaje']; }
  get skill() { return this.Form.controls['skill']; }
 
  //inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sHabilidad: HabilidadService,
    private router:Router, 
    private activatedRoute:ActivatedRoute
  ) {
    this.Form = this.formBuilder.group({
      id: [''],
      porcentaje: ['', [Validators.required]],
      skill: ['', [Validators.required]],
     
    })
   }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sHabilidad.verHabilidad(id).subscribe(data => {
      this.habilidades=data
    },error =>{
      alert("Error al cargar datos");
      this.router.navigate(['/dashboard']);
    }
    )
  }

  onUpdate():void{
    this.sHabilidad.modificarHabilidad(this.Form.value).subscribe(
     data => { alert("Habilidad modificada.")});
     this.router.navigate(['/dashboard']);
 }

 onEnviar(event: Event) {
  event.preventDefault;
if (this.Form.valid){
  alert("Habilidad modificada.");
  this.onUpdate();
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

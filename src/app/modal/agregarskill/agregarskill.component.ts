import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/entidad/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-agregarskill',
  templateUrl: './agregarskill.component.html',
  styleUrls: ['./agregarskill.component.css']
})
export class AgregarskillComponent implements OnInit {
  habi : Habilidad[]=[];
  id?: number;
  Form: FormGroup;

  get porcentaje() { return this.Form.controls['porcentaje']; }
  get skill() { return this.Form.controls['skill']; }

 
  
  //inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private sHabilidad: HabilidadService
  ) {
    this.Form = this.formBuilder.group({
      porcentaje: ['', [Validators.required]],
      skill: ['', [Validators.required]],
     
    })
   }

  ngOnInit(): void {
  }

  onCreate(): void{
    this.sHabilidad.agregarHabilidad(this.Form.value).subscribe(
      data=>{alert("Nueva Habilidad fue añadida correctamente")
      window.location.reload();
    })
    }
  
    onEnviar(event: Event) {
      if(this.Form.valid){
        this.onCreate();
        alert("Nueva Habilidad fue añadida correctamente");
        this.router.navigateByUrl('/dashboard');
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

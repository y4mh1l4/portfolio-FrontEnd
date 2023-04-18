import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Capacitacion } from 'src/app/entidad/capacitacion';
import { CapacitacionService } from 'src/app/servicios/capacitacion.service';

@Component({
  selector: 'app-agregarcurso',
  templateUrl: './agregarcurso.component.html',
  styleUrls: ['./agregarcurso.component.css']
})
export class AgregarcursoComponent implements OnInit {
  cursos : Capacitacion[]=[];
  id?: number;
  Form: FormGroup;

  get imagen() { return this.Form.controls['imagen']; }
  get fecha() { return this.Form.controls['fecha']; }
  get curso() { return this.Form.controls['curso']; }
  
  //inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sCapacitacion: CapacitacionService,
  ) {
    this.Form = this.formBuilder.group({
      imagen: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      curso: ['', [Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  onCreate(): void{
    this.sCapacitacion.agregarCapacitacion(this.Form.value).subscribe(
      data=>{alert("Nueva Capacitacion fue añadida correctamente")
      window.location.reload();
    })
    }

    onEnviar(event: Event) {
      if(this.Form.valid){
        this.onCreate();
        alert("Nueva Capacitacion fue añadida correctamente");
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

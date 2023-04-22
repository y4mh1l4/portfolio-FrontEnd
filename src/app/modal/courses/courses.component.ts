import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Capacitacion } from 'src/app/entidad/capacitacion';
import { CapacitacionService } from 'src/app/servicios/capacitacion.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  cursos : Capacitacion[]=[];
  Form: FormGroup;
  capacitaciones!: Capacitacion;
  id?: number;

  get imagen() { return this.Form.controls['imagen']; }
  get fecha() { return this.Form.controls['fecha']; }
  get curso() { return this.Form.controls['curso']; }
 
  //inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private sCapacitacion: CapacitacionService,
    private router:Router, 
    private activatedRoute:ActivatedRoute
  ) { 
    this.Form = this.formBuilder.group({
      id: [''],
      imagen: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      curso: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sCapacitacion.verCapacitacion(id).subscribe(data => {
      this.capacitaciones=data
    },error =>{
      alert("Error al cargar datos");
      this.router.navigate(['/dashboard']);
    }
    )
  }

  onUpdate():void{
    this.sCapacitacion.modificarCapacitacion(this.Form.value).subscribe(
     data => { alert("Capacitacion modificada.")});
     this.router.navigate(['/dashboard']);
 }


 onEnviar(event: Event) {
  event.preventDefault;
if (this.Form.valid){
  alert("Capacitacion modificada.");
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

import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/entidad/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.css']
})
export class DesafioComponent implements OnInit {
  project : Proyecto[]=[];
  id?: number;
  Form: FormGroup;
  proyectos!: Proyecto;

  get subtitulo() { return this.Form.controls['subtitulo']; }
  get imagen() { return this.Form.controls['imagen']; }
  get fecha() { return this.Form.controls['fecha']; }
  get descripcion() { return this.Form.controls['descripcion']; }
  get enlace() { return this.Form.controls['enlace']; }


  //inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private router:Router, 
    private activatedRoute:ActivatedRoute,
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
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.verProyecto(id).subscribe(data => {
      this.proyectos=data
    },error =>{
      alert("Error al cargar datos");
      this.router.navigate(['/dashboard']);
    }
    )
  }

  onUpdate():void{
    this.sProyecto.modificarProyecto(this.Form.value).subscribe(
     data => { alert("Proyecto modificada.")});
     this.router.navigate(['/dashboard']);
 }

 onEnviar(event: Event) {
  event.preventDefault;
if (this.Form.valid){
  alert("Proyecto modificada.");
  this.onUpdate();
}else{
  alert("falló en la carga, intente nuevamente");
  this.Form.markAllAsTouched();
}
}

salir(){
  this.router.navigateByUrl('/dashboard');
}

refrescar(){
  this.Form.reset()
}  
}

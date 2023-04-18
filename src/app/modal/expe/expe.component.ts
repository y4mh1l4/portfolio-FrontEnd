import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/entidad/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-expe',
  templateUrl: './expe.component.html',
  styleUrls: ['./expe.component.css']
})
export class ExpeComponent implements OnInit {
  experto: Experiencia[]=[];
  Form: FormGroup;
  experiencia!: Experiencia;

  get empresa() { return this.Form.controls['empresa']; }
  get puesto() { return this.Form.controls['puesto']; }
  get descripcion() { return this.Form.controls['descripcion']; }
  get fechainicio() { return this.Form.controls['fechainicio']; }
  get fechafinal() { return this.Form.controls['fechafinal']; }
  get logo() { return this.Form.controls['logo']; }
 
  //inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder, 
    private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private sExperiencia: ExperienciaService
  ) { 
    this.Form = this.formBuilder.group({
      id: [''],
      empresa: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fechainicio: ['', [Validators.required]],
      fechafinal: ['', [Validators.required]],
      logo: ['', [Validators.required]],
    });
   
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.verExperiencia(id).subscribe(data => {
      this.experiencia=data
    },error =>{
      alert("Error al cargar datos");
      this.router.navigate(['/dashboard']);
    }
    )
}

onUpdate():void{
   this.sExperiencia.modificarExperiencia(this.Form.value).subscribe(
    data => { alert("Experiencia modificada.")});
    this.router.navigate(['/dashboard']);
}

onEnviar(event:Event){
  event.preventDefault;
  if (this.Form.valid){
    alert("Experiencia modificada.");
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

import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sobremi } from 'src/app/entidad/sobremi';
import { SobremiService } from 'src/app/servicios/sobremi.service';

@Component({
  selector: 'app-admininfo',
  templateUrl: './admininfo.component.html',
  styleUrls: ['./admininfo.component.css']
})
export class AdmininfoComponent implements OnInit {
  info : Sobremi[] = [];
  id?: number;
  Form: FormGroup;
  sobremi!: Sobremi;

  get titulo() { return this.Form.controls['titulo']; }
  get contenido() { return this.Form.controls['contenido']; }

  //inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private sInfo: SobremiService,
    private activatedRoute:ActivatedRoute
  ) {
    this.Form =this.formBuilder.group({
      id : [''],
      titulo: ['', [Validators.required]],
      contenido: ['', [Validators.required]],
    })
  }
    
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sInfo.versobremi(id).subscribe(data => {
      this.sobremi=data
    },error =>{
      alert("Error al cargar datos");
    }
    )
  }

  onUpdate():void{
    this.sInfo.modificarsobremi(this.Form.value).subscribe(
     data => { alert("Sobre Mi modificada.")});
     this.router.navigate(['/dashboard']);
 }

  
 onEnviar(event: Event) {
  event.preventDefault;
if (this.Form.valid){
  alert("Sobre Mi modificada.");
  this.onUpdate();
}else{
  alert("falló en la carga, intente nuevamente");
  this.Form.markAllAsTouched();
}
}

  refrescar(){
      this.Form.reset()
  }

}

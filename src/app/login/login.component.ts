import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '../entidad/persona';
import { AutenticationService } from '../servicios/autentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;

  email= '';
  clave= '';

  persona: Persona = new Persona("", "", "", "", "", "", "");
 
  constructor(private formBuilder:FormBuilder, 
    private router:Router, private autenticacionServicio: AutenticationService) {
      this.loginform = this.formBuilder.group({
        email: ['',[Validators.required, Validators.email]],
        clave: ['', [Validators.required, Validators.minLength(8)]],
      })
    
    }


  ngOnInit(): void {
  }
  
  get Email() { return this.loginform.controls['email']; }
  get Clave() { return this.loginform.controls['clave']; }
 

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.loginform.valid) {
      console.log(JSON.stringify(this.loginform.value));
      this.autenticacionServicio.loginPersona(this.loginform.value).subscribe(data => {
        console.log("DATA: " + JSON.stringify(data.id));
        if (data.id) {
          alert("Ingresando al portfolio");
          this.router.navigate(['/dashboard']);
        } else {
          alert("Error al iniciar sesión. Credenciales no válidas!!!");
        }
      }, error => {
        alert("ERROR!!!");
      })
    } else {
      sessionStorage.setItem('currentUser', "");
      alert("Ha ocurrido un error");
    }
  }
  
}



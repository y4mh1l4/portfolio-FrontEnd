import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admnavbar',
  templateUrl: './admnavbar.component.html',
  styleUrls: ['./admnavbar.component.css']
})
export class AdmnavbarComponent {

  constructor(private router:Router) {}

  cerrarSesion(){
   this.router.navigate(['']);
  }

}

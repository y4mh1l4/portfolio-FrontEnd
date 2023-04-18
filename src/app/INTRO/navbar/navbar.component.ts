import { Component } from '@angular/core';
import { Redes } from 'src/app/entidad/redes';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  //esto es para traer distintos datos
  red : Redes[] = [];
  id? : number;

  constructor(private sRedes: RedesService){ }

  ngOnInit(): void {
    this.cargarRedes();
  }

  public cargarRedes(): void {
    this.sRedes.verRedes().subscribe(
      data => {this.red=data});
    }

}

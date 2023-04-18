import { Component } from '@angular/core';
import { Sobremi } from 'src/app/entidad/sobremi';
import { SobremiService } from 'src/app/servicios/sobremi.service';
@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {
  //esto es para traer distintos datos
  info : Sobremi[] = [];
  id?: number;
 

  constructor(private sInfo: SobremiService){ }

  ngOnInit(): void {
    this.cargarSobremi();
  }

  public cargarSobremi(): void {
    this.sInfo.versobremis().subscribe(
      data => {this.info=data});
    }

}

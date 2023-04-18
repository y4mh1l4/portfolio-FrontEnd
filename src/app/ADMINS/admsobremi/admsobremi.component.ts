import { Component, OnInit } from '@angular/core';
import { Sobremi } from 'src/app/entidad/sobremi';
import { SobremiService } from 'src/app/servicios/sobremi.service';

@Component({
  selector: 'app-admsobremi',
  templateUrl: './admsobremi.component.html',
  styleUrls: ['./admsobremi.component.css']
})
export class AdmsobremiComponent implements OnInit{
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../entidad/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  url= 'https://backdeployporfolio.onrender.com/red/'

  constructor(private httpClient:HttpClient) { }

  public verRedes(): Observable<Redes[]>{ 
    return this.httpClient.get<Redes[]>(this.url + 'lista');
  }

  public verRed(id: number): Observable<Redes>{
    return this.httpClient.get<Redes>(this.url + `ver/${id}`)
  }
}

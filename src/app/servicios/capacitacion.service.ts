import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Capacitacion } from '../entidad/capacitacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionService {
  url= 'http://localhost:8080/capacitacion/'

  constructor(private httpClient:HttpClient) { }

  public verCapacitaciones(): Observable<Capacitacion[]>{ 
    return this.httpClient.get<Capacitacion[]>(this.url + 'lista');
  }

  public verCapacitacion(id: number): Observable<Capacitacion>{
    return this.httpClient.get<Capacitacion>(this.url + `ver/${id}`)
  }

  public agregarCapacitacion(capacitacion: Capacitacion): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', capacitacion);
  }

  public eliminarCapacitacion(id: number): Observable<Capacitacion>{
    return this.httpClient.delete<Capacitacion>(this.url + `borrar/${id}`)
  }

  public modificarCapacitacion(capacitacion: Capacitacion):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', capacitacion)
  }

}

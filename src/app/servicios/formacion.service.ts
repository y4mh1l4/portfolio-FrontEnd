import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formacion } from '../entidad/formacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  url= 'https://backdeployporfolio.onrender.com/formacion/'

  constructor(private httpClient:HttpClient) { }

  public verFormaciones(): Observable<Formacion[]>{ 
    return this.httpClient.get<Formacion[]>(this.url + 'lista');
  }

  public verFormacion(id: number): Observable<Formacion>{
    return this.httpClient.get<Formacion>(this.url + `ver/${id}`)
  }

  public agregarFormacion(formacion: Formacion): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', formacion);
  }

  public eliminarFormacion(id: number): Observable<Formacion>{
    return this.httpClient.delete<Formacion>(this.url + `borrar/${id}`)
  }

  public modificarFormacion(formacion: Formacion):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', formacion)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../entidad/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url= 'http://localhost:8080/habilidad/'

  constructor(private httpClient:HttpClient) { }

  public verHabilidades(): Observable<Habilidad[]>{ 
    return this.httpClient.get<Habilidad[]>(this.url + 'lista');
  }

  public verHabilidad(id: number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.url + `ver/${id}`)
  }

  public agregarHabilidad(habilidad: Habilidad): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', habilidad);
  }

  public eliminarHabilidad(id: number): Observable<Habilidad>{
    return this.httpClient.delete<Habilidad>(this.url + `borrar/${id}`)
  }

  public modificarHabilidad(habilidad: Habilidad):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', habilidad)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entidad/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url= 'http://localhost:8080/experiencia/'

  constructor(private httpClient:HttpClient) { }

  public verExperiencias(): Observable<Experiencia[]>{ 
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public verExperiencia(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`)
  }

  public agregarExperiencia(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia);
  }

  public eliminarExperiencia(id: number): Observable<Experiencia>{
    return this.httpClient.delete<Experiencia>(this.url + `borrar/${id}`)
  }

  public modificarExperiencia(experiencia: Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', experiencia)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../entidad/proyecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url= 'https://backdeployporfolio.onrender.com/proyecto/'

  constructor(private httpClient:HttpClient) { }

  public verProyectos(): Observable<Proyecto[]>{ 
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public verProyecto(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`)
  }

  public agregrarProyecto(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', proyecto);
  }

  public eliminarProyecto(id: number): Observable<Proyecto>{
    return this.httpClient.delete<Proyecto>(this.url + `borrar/${id}`)
  }

  public modificarProyecto(proyecto: Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', proyecto)
  }
}

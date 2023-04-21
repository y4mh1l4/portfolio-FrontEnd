import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sobremi } from '../entidad/sobremi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  url= 'https://backdeployporfolio.onrender.com/sobremi/'

  constructor(private httpClient:HttpClient) { }

  public versobremis(): Observable<Sobremi[]>{ 
    return this.httpClient.get<Sobremi[]>(this.url + 'lista');
  }

  public versobremi(id: number): Observable<Sobremi>{
    return this.httpClient.get<Sobremi>(this.url + `ver/${id}`)
  }

  public agregrarsobremi(sobremi: Sobremi): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', sobremi);
  }

  public eliminarsobremi(id: number): Observable<Sobremi>{
    return this.httpClient.delete<Sobremi>(this.url + `borrar/${id}`)
  }

  public modificarsobremi(sobremi: Sobremi):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', sobremi)
  }
}

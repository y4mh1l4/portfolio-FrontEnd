import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../entidad/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url= 'https://backdeployporfolio.onrender.com/persona/'

  constructor(private httpClient:HttpClient) { }

    public verPersonas(): Observable<Persona[]>{ 
      return this.httpClient.get<Persona[]>(this.url + 'lista');
    }
  
    public verPersona(id: number): Observable<Persona>{
      return this.httpClient.get<Persona>(this.url + `ver/${id}`)
    }
  
    public agregrarPersona(persona: Persona): Observable<any>{
      return this.httpClient.post<any>(this.url + 'crear', persona);
    }
  
    public eliminarPersona(id: number): Observable<Persona>{
      return this.httpClient.delete<Persona>(this.url + `borrar/${id}`)
    }
  
    public modificarPersona(persona: Persona):Observable<any>{
      return this.httpClient.put<any>(this.url + 'editar', persona)
    }
}

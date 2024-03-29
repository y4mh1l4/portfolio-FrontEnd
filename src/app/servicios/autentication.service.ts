import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  url = 'https://backdeployporfolio.onrender.com/persona/autentication/login'
   
  currentUserSubject!: BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    console.log('Auth está corriendo');
   this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
   }

   loginPersona(credenciales:any): Observable<any>{
    console.log('credenciales');
    var httpOptions={headers:new HttpHeaders({
      'Content-Type':'application/json'
    })}
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
    sessionStorage.setItem('currentUser',JSON.stringify(data));
    this.currentUserSubject.next(data);
    console.log("Servicio esta corriendo" + JSON.stringify(data));
    return data
    }));
  }

  get usuarioAutenticado(){  
    return this.currentUserSubject.value;
  }
}

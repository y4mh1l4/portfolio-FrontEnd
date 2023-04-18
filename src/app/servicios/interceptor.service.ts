import { Injectable } from '@angular/core';
import { AutenticationService } from './autentication.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private autenticacionServicio: AutenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.autenticacionServicio.usuarioAutenticado;
    if (currentUser && currentUser.id) {
      req.clone({
        setHeaders:{
          Authorization: `Bearer${currentUser.id}` //me devuelve los datos de la persona
        }
      })
    }
    console.log("Interceptor esta corriendo "+ JSON.stringify(currentUser));
    return next.handle(req);
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticationService } from './autentication.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private autenticacionServicio: AutenticationService) {}

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

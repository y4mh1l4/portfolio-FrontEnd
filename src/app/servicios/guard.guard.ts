import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AutenticationService } from './autentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private autenticacionServicio: AutenticationService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser = this.autenticacionServicio.usuarioAutenticado;

      if(currentUser && currentUser.id){
        this.router.navigate(['/dashboard'])
    return true;
 }
  else{
    //this.router.navigate([''])
    return false;
  
}
    }
  }

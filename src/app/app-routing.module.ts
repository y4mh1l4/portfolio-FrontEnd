import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './INTRO/index/index.component';
import { DashboardComponent } from './ADMINS/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdmininfoComponent } from './modal/admininfo/admininfo.component';
import { PerfiladmComponent } from './modal/perfiladm/perfiladm.component';
import { ExpeComponent } from './modal/expe/expe.component';
import { FormacionComponent } from './modal/formacion/formacion.component';
import { CoursesComponent } from './modal/courses/courses.component';
import { SkillsComponent } from './modal/skills/skills.component';
import { DesafioComponent } from './modal/desafio/desafio.component';
import { Error404Component } from './error404/error404.component';
import { GuardGuard } from './servicios/guard.guard';





const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard',  component:DashboardComponent, canActivate:[GuardGuard]},
  {path: 'sobremi/:id',  component:AdmininfoComponent, canActivate:[GuardGuard]},
  {path: 'perfil/:id', component:PerfiladmComponent, canActivate:[GuardGuard]},
  {path: 'experiencia/:id',  component:ExpeComponent, canActivate:[GuardGuard]},
  {path: 'formacion/:id',  component:FormacionComponent, canActivate:[GuardGuard]},
  {path: 'cursos/:id', component:CoursesComponent, canActivate:[GuardGuard]},
  {path: 'habilidad/:id',  component:SkillsComponent, canActivate:[GuardGuard]},
  {path: 'proyecto/:id', component:DesafioComponent, canActivate:[GuardGuard]},
  {path: '**', component:Error404Component,}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

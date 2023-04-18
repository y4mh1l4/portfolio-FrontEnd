import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './INTRO/index/index.component';
import { NavbarComponent } from './INTRO/navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { BannerComponent } from './INTRO/banner/banner.component';
import { SobremiComponent } from './INTRO/sobremi/sobremi.component';
import { ExperienciaComponent } from './INTRO/experiencia/experiencia.component';
import { EducacionComponent } from './INTRO/educacion/educacion.component';
import { CapacitacionComponent } from './INTRO/capacitacion/capacitacion.component';
import { ProyectoComponent } from './INTRO/proyecto/proyecto.component';
import { HabilidadesComponent } from './INTRO/habilidades/habilidades.component';
import { DashboardComponent } from './ADMINS/dashboard/dashboard.component';
import { AdmnavbarComponent } from './ADMINS/admnavbar/admnavbar.component';
import { AdminperfilComponent } from './ADMINS/adminperfil/adminperfil.component';
import { PerfiladmComponent } from './modal/perfiladm/perfiladm.component';
import { AdmsobremiComponent } from './ADMINS/admsobremi/admsobremi.component';
import { AdmininfoComponent } from './modal/admininfo/admininfo.component';
import { AdminexpeComponent } from './ADMINS/adminexpe/adminexpe.component';
import { AdmineducacionComponent } from './ADMINS/admineducacion/admineducacion.component';
import { FormacionComponent } from './modal/formacion/formacion.component';
import { AdminhabilidadComponent } from './ADMINS/adminhabilidad/adminhabilidad.component';
import { AdmincursosComponent } from './ADMINS/admincursos/admincursos.component';
import { CoursesComponent } from './modal/courses/courses.component';
import { SkillsComponent } from './modal/skills/skills.component';
import { AdminproyectoComponent } from './ADMINS/adminproyecto/adminproyecto.component';
import { DesafioComponent } from './modal/desafio/desafio.component';
import { Error404Component } from './error404/error404.component';
import { ExpeComponent } from './modal/expe/expe.component';
import { AgregarexpeComponent } from './modal/agregarexpe/agregarexpe.component';
import { AgregarcursoComponent } from './modal/agregarcurso/agregarcurso.component';
import { AgregarformacionComponent } from './modal/agregarformacion/agregarformacion.component';
import { AgregarskillComponent } from './modal/agregarskill/agregarskill.component';
import { AgregardesafioComponent } from './modal/agregardesafio/agregardesafio.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    LoginComponent,
    BannerComponent,
    SobremiComponent,
    ExperienciaComponent,
    EducacionComponent,
    CapacitacionComponent,
    ProyectoComponent,
    HabilidadesComponent,
    DashboardComponent,
    AdmnavbarComponent,
    AdminperfilComponent,
    PerfiladmComponent,
    AdmsobremiComponent,
    AdmininfoComponent,
    AdminexpeComponent,
    AdmineducacionComponent,
    FormacionComponent,
    AdminhabilidadComponent,
    AdmincursosComponent,
    CoursesComponent,
    SkillsComponent,
    AdminproyectoComponent,
    DesafioComponent,
    Error404Component,
    ExpeComponent,
    AgregarexpeComponent,
    AgregarcursoComponent,
    AgregarformacionComponent,
    AgregarskillComponent,
    AgregardesafioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from "@angular/forms";
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    PersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[
    MainPageComponent,
  ], 
  providers:[
    DbzService
  ]
})
export class DbzModule { }

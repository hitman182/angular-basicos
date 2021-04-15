import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
 
})
export class PersonajeComponent  {

  constructor(private dbzSrv:DbzService){}

 @Input()nuevo :Personaje={
   nombre:'',
   poder:0
 }

 //@Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

 agregar(){

  if(this.nuevo.nombre.trim().length ===0){
    return;
  }
  //console.log(this.nuevo);
  //this.onNuevoPersonaje.emit(this.nuevo);

  //this.personajes.push(this.nuevo);

  this.dbzSrv.agregarPersonaje(this.nuevo);

  this.nuevo= {
    nombre: '',
    poder : 0
  }
 }
}

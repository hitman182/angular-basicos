import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
 
})
export class PersonajeComponent  {

  

 @Input()nuevo :Personaje={
   nombre:'',
   poder:0
 }

 @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

 agregar(){

  if(this.nuevo.nombre.trim().length ===0){
    return;
  }
  //console.log(this.nuevo);
  this.onNuevoPersonaje.emit(this.nuevo);

  //this.personajes.push(this.nuevo);
  this.nuevo= {
    nombre: '',
    poder : 0
  }
 }
}

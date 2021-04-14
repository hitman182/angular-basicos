import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {

  personajes:Personaje []=[
    { nombre:'Goku',
      poder: 15000
    },
    { nombre:'Vegeta',
      poder: 8500
    },
    { nombre:'Krillin',
      poder: 3000
    }

  ];

  nuevo :Personaje={
    nombre:'Maestro Roshi',
    poder:1000
  }

  agregarNuevoPersonaje(event:Personaje){
      console.log(event)
      this.personajes.push(event);
  }

}

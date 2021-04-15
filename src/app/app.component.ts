import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
 
  contador : boolean = false;
  heroes : boolean = false;
  dbz:boolean=false;

  mostrarHeroes(){
    this.heroes = !this.heroes;
  }

  mostrarContador(){
    this.contador = !this.contador;
  }
  mostrarDbz(){
    this.dbz = !this.dbz;
  }
}





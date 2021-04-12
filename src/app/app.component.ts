import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  contador : boolean = false;
  heroes : boolean = false;

  mostrarHeroes(){
    this.heroes = !this.heroes;
  }

  mostrarContador(){
    this.contador = !this.contador;
  }
}





import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
    
})
export class ContadorComponent{

    titulo = 'Contador App';

    contador : number =0;
  
    base :number =5;
  
    cambiarValor( valor : boolean ){
      valor? this.contador+=this.base : this.contador-=this.base;
    }
}
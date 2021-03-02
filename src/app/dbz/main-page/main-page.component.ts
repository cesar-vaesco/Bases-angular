import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface.ts';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {



  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1500,
  };

  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }

  agregarNuevoPersonaje( argumento: Personaje){
    // console.log('Main Page Component');
    // console.log(argumento);
    //Agregando al personaje al arreglo de personajes
    this.personajes.push(argumento);

  }

  constructor( private dbzService: DbzService){

  }
}

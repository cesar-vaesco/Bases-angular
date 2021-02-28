import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface.ts';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegueta',
      poder: 14500,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1500,
  };

  agregarNuevoPersonaje( argumento: Personaje){
    // console.log('Main Page Component');
    // console.log(argumento);
    //Agregando al personaje al arreglo de personajes
    this.personajes.push(argumento);

  }

  constructor( private dbzService: DbzService){}
}

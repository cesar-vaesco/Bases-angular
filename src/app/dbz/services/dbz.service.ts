import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface.ts';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegueta',
      poder: 14500,
    },
  ];

  get personajes(): Personaje[] {
    // Se rompe la referencia usando el operador spred (...) creando un nuevo arreglo
    return [...this._personajes];
  }

  constructor() {}

    //Agregando personajes
  agregarPersonajes(personaje: Personaje) {
    this._personajes.push( personaje );
  }

}

import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface.ts';


@Injectable()
export class DbzService{

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
    constructor(){
        console.log('Servicio inicializado');
    }
}

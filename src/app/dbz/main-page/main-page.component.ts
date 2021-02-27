import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface.ts';



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
    nombre: '',
    poder: 0,
  };

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }
    console.log(this.nuevo);
    // Insertar personaje en el arreglo
    this.personajes.push(this.nuevo);
    // Limpiar los input del formulario
    this.nuevo = { nombre: '', poder: 0 };
  }
}

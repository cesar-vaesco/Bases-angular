import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface.ts';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {


  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit( this.nuevo );
    // Insertar personaje en el arreglo
    //this.personajes.push(this.nuevo);
    // Limpiar los input del formulario
    this.nuevo = { nombre: '', poder: 0 };

    //console.log(this.personajes);
  }
}

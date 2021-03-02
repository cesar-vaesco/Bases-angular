import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface.ts';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  //@Input() personajes: Personaje[] = [];

  get personajes() {
    //se trae el método get personajes de dbzService servicio el cual ya lo tenemos importado
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {}
}

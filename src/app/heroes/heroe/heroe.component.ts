import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre:String = 'Ironman';
    edad:Number = 45;

    get nombreCapitalizado(){
         return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{

        return `Nombre: ${this.nombre} --- Edad: ${this.edad}`;
    }

}

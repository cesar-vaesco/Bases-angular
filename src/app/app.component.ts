import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  relsutMulti:number = 0;

  acumular(valor: number) {
    this.numero += valor;
  }

}

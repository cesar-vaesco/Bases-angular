import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
      <h1>{{ titulo }}</h1>
      <h3>la base es: {{ base }}</h3>
      <hr />
      <button (click)="acumular(+base)">+ {{ base }}</button>
      <span>Contador: {{ numero }} </span>
      <button (click)="acumular(-base)">- {{ base }}</button>
      <hr />
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}

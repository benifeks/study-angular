import { Component } from '@angular/core';
import { Square } from 'src/app/models/tasks-models/tasks';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  public squares: Square[] = [];

  public isSquare(number: HTMLInputElement) {
    if (Math.sqrt(+number.value) % 1 === 0) {
      this.squares.push({
        resultBoolean: true,
        resultNumber:
          'is the square of' + ' ' + Math.sqrt(+number.value).toString(),
      });
      number.value = '';
      return;
    }
    this.squares.push({
      resultBoolean: false,
      resultNumber: 'no square',
    });
    number.value = '';
  }

  public clearSquare(): void {
    this.squares = [];
  }
}

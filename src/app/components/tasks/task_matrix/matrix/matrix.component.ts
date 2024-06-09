import { Component } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
})
export class MatrixComponent {
  public matrixShow: Array<number[]> = [];

  private _fillingTheMatrix(size: HTMLInputElement) {
    let currentMatrix: Array<number[]> = [];
    let sizeNumber: number = Number(size.value);
    let counter: number = 1;
    let startCol: number = 0;
    let endCol: number = sizeNumber - 1;
    let startRow: number = 0;
    let endRow: number = sizeNumber - 1;

    currentMatrix = new Array(sizeNumber)
      .fill(sizeNumber)
      .map(() => new Array(sizeNumber).fill(sizeNumber));

    while (startCol <= endCol && startRow <= endRow) {
      for (let i = startCol; i <= endCol; i++) {
        currentMatrix[startRow][i] = counter;

        counter++;
      }
      startRow++;

      for (let i = startRow; i <= endRow; i++) {
        currentMatrix[i][endCol] = counter;
        counter++;
      }
      endCol--;

      for (let i = endCol; i >= startCol; i--) {
        currentMatrix[endRow][i] = counter;
        counter++;
      }
      endRow--;

      for (let i = endRow; i >= startRow; i--) {
        currentMatrix[i][startCol] = counter;
        counter++;
      }
      startCol++;
    }

    size.value = '';
    return currentMatrix;
  }

  public clear(): void {
    this.matrixShow = [];
  }

  public showMatrix(size: HTMLInputElement): void {
    let counter = 1;
    let sizeNumber: number = Number(size.value);

    this.matrixShow = new Array(sizeNumber)
      .fill(sizeNumber)
      .map(() => new Array(sizeNumber).fill('*'));
    let currentArray = this._fillingTheMatrix(size);

    while (counter <= this.matrixShow.flat().length) {
      currentArray.forEach((item, i) => {
        let ind = i;
        item.forEach((elem, e) => {
          let end = e;
          if (elem === counter) {
            setTimeout(() => {
              this.matrixShow[ind][end] = elem;
            }, 200 * counter);
          }
        });
      });
      counter++;
    }
  }
}

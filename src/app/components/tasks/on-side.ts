import { CodeTask } from 'src/app/models/tasks-models/tasks';

export const codeSquare: CodeTask = {
  codeHTML: `
<mat-card>
  <h1>Square</h1>
  <mat-card-content
    ><div class="container-fluid 
    bg-primary-subtle 
    m-1">
      <div class="row">
        <div class="row">
          <h3 class="bg-primary-subtle">
            Is a number the square of another integer
          </h3>
        </div>

        <div class="col-md-6 
        bg-primary-subtle 
        text-start">
          <form (ngSubmit)="isSquare(squaresValue)">
            <label for="squaresValue"></label>
            <input
              type="number"
              id="squaresValue"
              class="form-control"
              #squaresValue
              placeholder="enter the number"
            />
            <button type="submit" 
            mat-flat-button 
            color="primary">Info</button>
            <button
              type="button"
              mat-flat-button
              color="primary"
              (click)="clearSquare()"
            >
              Clear
            </button>
          </form>
        </div>

        <div class="col-md-6 
        bg-primary-subtle 
        text-start">
          <h2>Result:</h2>
          <div *ngFor="let item of squares">
            <p>
              <span>{{ item.resultBoolean }}</span> -
              <span>{{ item.resultNumber }}</span>
            </p>
          </div>
        </div>
      </div>
    </div></mat-card-content
  >
</mat-card>
`,
  codeTS: `
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
          'is the square of' + 
          ' ' + 
          Math.sqrt(+number.value).toString(),
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
  `,
  codeSCSS: `
h1 {
  color: whitesmoke;
}

button {
  margin: 5px;
}
  `,
}

export const codeVowels: CodeTask = {
  codeHTML: `
<mat-card>
  <h1>Vowels</h1>
  <mat-card-content
    ><div class="container-fluid bg-primary-subtle m-1">
      <div class="row">
        <div class="row">
          <h3 class="bg-primary-subtle">
            Return the number (count) of vowels in the 
            given string.
             We will
            consider a, e, i, o, u as vowels (but not y).
          </h3>
        </div>

        <div class="col-md-6 bg-primary-subtle text-start">
          <form (ngSubmit)="getCount(vowelsValue)">
            <label for="vowelsValue"></label>
            <input
              type="string"
              id="vowelsValue"
              class="form-control"
              #vowelsValue
              placeholder="enter the string"
            />
            <button 
            type="submit" 
            mat-flat-button 
            color="primary">
            Info
            </button>

            <button
              type="button"
              mat-flat-button
              color="primary"
              (click)="clear()"
            >
              Clear
            </button>
          </form>
        </div>

        <div class="col-md-6 
        bg-primary-subtle 
        text-start">
          <h2>Result:</h2>
          <div>
            <p>
              {{ someString }}
            </p>
            <p>
              {{ result }}
            </p>
          </div>
        </div>
      </div>
    </div></mat-card-content
  >
</mat-card>
`,
  codeTS: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-vowels',
  templateUrl: './vowels.component.html',
  styleUrls: ['./vowels.component.scss'],
})
export class VowelsComponent {
  public someString: string = '';
  public result: string = '';

  public getCount(str: HTMLInputElement) {
    this.someString = '';
    this.result = '';

    str.value = str.value.toLowerCase();
    let resultArray = [...str.value]
    .filter((item: any) => {
      if (
        item === 'a' ||
        item === 'e' ||
        item === 'i' ||
        item === 'o' ||
        item === 'u'
      ) {
        return item;
      }
    });
    this.someString = str.value;
    this.result = resultArray.length.toString();

    str.value = '';
  }

  public clear() {
    this.someString = '';
    this.result = '';
  }
}
  `,
  codeSCSS: `
h1 {
  color: whitesmoke;
}

button {
  margin: 5px;
}
  `,
};

export const codeFindWork: CodeTask = {
  codeHTML: `
  <mat-card>
  <h1>Find word</h1>
  <mat-card-content
    ><div class="container-fluid bg-primary-subtle m-1">
      <div class="row">
        <div class="row">
          <h3 class="bg-primary-subtle">
            How many times each word appears in the text.
          </h3>
        </div>

        <div class="col-md-6 bg-primary-subtle text-start">
          <form (ngSubmit)="findWord(textWord)">
            <input
              type="text"
              class="form-control"
              #textWord
              placeholder="enter the text"
            />
            <button
             type="submit"
             mat-flat-button 
             color="primary">Info</button>
            <button
              type="button"
              mat-flat-button
              color="primary"
              (click)="clear()"
            >
              Clear
            </button>
          </form>
        </div>

        <div class="col-md-6 bg-primary-subtle text-start">
          <h2>Result:</h2>
          <div>
            <div *ngFor="let item of wordsArray">
              <p>
                <span> {{ item.word }} </span> -
                <span> {{ item.value }} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
     </mat-card-content>
    </mat-card>
  `,
  codeTS: `
import { Component } from '@angular/core';

export interface Word {
  word: string;
  value: string;
}

@Component({
  selector: 'app-find-word',
  templateUrl: './find-word.component.html',
  styleUrls: ['./find-word.component.scss'],
})
export class FindWordComponent {
  public wordsArray: Word[] = [];

  public findWord(text: HTMLInputElement): void {
    let textArray = [];
    textArray = text.value.split(' ');
    this.wordsArray = this._countWords(textArray);
    text.value = '';
  }

  private _countWords(text: string[]): Word[] {
    let count: any = {};
    text.forEach((word: string) => {
      if (!count[word]) {
        count[word] = 1;
      } else {
        count[word]++;
      }
    });
    let countArray: any[] = Object.entries(count);

    let arrayObjects: Word[] = countArray
    .map((item: any) => {
      return { word: item[0], value: item[1] };
    });
    return arrayObjects;
  }

  public clear() {
    this.wordsArray = [];
  }
}
  `,
  codeSCSS: `
h1 {
  color: whitesmoke;
}

button {
  margin: 5px;
}
  `,
}

export const codeMatrix: CodeTask = {
  codeHTML: `
<mat-card>
  <h1>Matrix</h1>

  <mat-card-content
    ><div class="container-fluid bg-primary-subtle m-1">
      <div class="row">
        <div class="row">
          <h3
           class="bg-primary-subtle">Filling
            the matrix with a spiral</h3>
        </div>

        <div class="col-md-6 bg-primary-subtle text-start">
          <form (ngSubmit)="showMatrix(matrix)">
            <label for="matrix"></label>
            <input
              type="number"
              id="matrix"
              class="form-control"
              #matrix
              placeholder="enter the number"
            />
            <button
             type="submit"
              mat-flat-button
               color="primary">
              Filling the matrix
            </button>
            <button
              type="button"
              mat-flat-button
              color="primary"
              (click)="clear()"
            >
              Clear
            </button>
          </form>
        </div>

        <div 
        class="col-md-6 
        bg-primary-subtle
         text-start">
          <h2>Result:</h2>
          <div>
            <div *ngFor="let row of matrixShow">
              <div>
                <span
                 class="elementMatrix m-2"
                  *ngFor="let elem of row">
                  {{ elem }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></mat-card-content
  >
</mat-card>


  `,

  codeTS: `
import { Component } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
})
export class MatrixComponent {
  public matrixShow: Array<number[]> = [];

  public fillingTheMatrix(size: HTMLInputElement) {
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
    let currentArray = this.fillingTheMatrix(size);

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

  `,

  codeSCSS: `
h1 {
  color: whitesmoke;
}

button {
  margin: 5px;
}

.elementMatrix {
  display: inline-block;
  margin: 5px;
  font-size: 20px;
  width: 30px;
  height: 30px;
}
  `
}
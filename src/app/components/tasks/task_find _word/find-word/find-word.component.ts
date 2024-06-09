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

    let arrayObjects: Word[] = countArray.map((item: any) => {
      return { word: item[0], value: item[1] };
    });
    return arrayObjects;
  }

  public clear() {
    this.wordsArray = [];
  }
}

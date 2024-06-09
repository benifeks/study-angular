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
    let resultArray = [...str.value].filter((item: any) => {
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
    this.someString = `In line: ${str.value}`;
    this.result = `${resultArray.length.toString()} vowels.`;

    str.value = '';
  }

  public clear() {
    this.someString = ``;
    this.result = ``;
  }
}

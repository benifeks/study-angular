import { Component } from '@angular/core';
import { CodeTask } from 'src/app/models/tasks-models/tasks';
import { codeVowels } from '../../on-side';

@Component({
  selector: 'app-vowels-code',
  templateUrl: './vowels-code.component.html',
  styleUrls: ['./vowels-code.component.scss'],
})
export class VowelsCodeComponent {
  public codeVowels: CodeTask = codeVowels;
}

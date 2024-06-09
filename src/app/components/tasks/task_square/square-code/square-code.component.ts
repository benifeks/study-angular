import { Component } from '@angular/core';
import { CodeTask } from 'src/app/models/tasks-models/tasks';
import { codeSquare } from '../../on-side';

@Component({
  selector: 'app-square-code',
  templateUrl: './square-code.component.html',
  styleUrls: ['./square-code.component.scss'],
})
export class SquareCodeComponent {
  public codeSquare: CodeTask = codeSquare;
}

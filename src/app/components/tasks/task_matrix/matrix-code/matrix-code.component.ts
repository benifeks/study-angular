import { Component } from '@angular/core';
import { CodeTask } from 'src/app/models/tasks-models/tasks';
import { codeMatrix } from '../../on-side';

@Component({
  selector: 'app-matrix-code',
  templateUrl: './matrix-code.component.html',
  styleUrls: ['./matrix-code.component.scss'],
})
export class MatrixCodeComponent {
  public codeMatrix: CodeTask = codeMatrix;
}

import { Component } from '@angular/core';
import { CodeTask } from 'src/app/models/tasks-models/tasks';
import { codeFindWork } from '../../on-side';

@Component({
  selector: 'app-find-word-code',
  templateUrl: './find-word-code.component.html',
  styleUrls: ['./find-word-code.component.scss'],
})
export class FindWordCodeComponent {
  public codeFindWork: CodeTask = codeFindWork;
}

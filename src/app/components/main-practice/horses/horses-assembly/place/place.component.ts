import { Component, Input } from '@angular/core';
import { Horse } from 'src/app/models/horses-models/horsesModel';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
})
export class PlaceComponent {
  @Input() horses: Horse[];
}

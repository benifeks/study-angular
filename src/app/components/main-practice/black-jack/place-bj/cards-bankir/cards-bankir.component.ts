import { Component, Input } from '@angular/core';
import { CardValues } from 'src/app/models/black-jack-models/black-jackModels';

@Component({
  selector: 'app-cards-bankir',
  templateUrl: './cards-bankir.component.html',
  styleUrls: ['./cards-bankir.component.scss'],
})
export class CardsBankirComponent {
  @Input() public showCardsBankir: string[];
}

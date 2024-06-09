import { Component } from '@angular/core';
import {
  WorkCards,
  Result,
  Cards,
  CardValues,
} from 'src/app/models/black-jack-models/black-jackModels';
import { hiddenCard } from './variables';

@Component({
  selector: 'app-black-jack',
  templateUrl: './black-jack.component.html',
  styleUrls: ['./black-jack.component.scss'],
})
export class BlackJackComponent {
  // public resultPlayer: number = 0;
  // public resultBankir: number = 0;
  public showResultPlayer: string | number = '---';
  public showResultBankir: string | number = '---';
  public resultMessage: string = 'ПЕРЕМЕШАЙТЕ КОЛОДУ';
  public showCardsPlayer: CardValues[] = [];
  public showCardsBankir: string[] = [];

  // public hiddenCard: string = hiddenCard;
  // public workCards: WorkCards = {
  //   cardsPlayer: [],
  //   cardsBankir: [],
  //   cardsBankirHidden: [],
  // };

  // private _setStartValues() {
  //   this.workCards.cardsPlayer = [];
  //   this.workCards.cardsBankir = [];
  //   this.workCards.cardsBankirHidden = [];
  //   this.resultMessage = 'ИГРА... ВОЗЬМИТЕ КАРТУ';
  //   this.resultPlayer = 0;
  //   this.resultBankir = 0;
  // }

  public updateResult(result: Result): void {
    this.showResultPlayer = result.resultPlayer;
    this.showResultBankir = result.resultBankir;
    this.resultMessage = result.resultMessage;
    this.showCardsPlayer = result.resultCardsPlayer;
    this.showCardsBankir = result.resultCardsBankir;
    
  }

  // public convertValue(value: string) {
  //   let valueNumber;
  //   if (value === 'ACE') {
  //     valueNumber = 11;
  //     return valueNumber;
  //   }
  //   if (value === 'KING') {
  //     valueNumber = 4;
  //     return valueNumber;
  //   }
  //   if (value === 'QUEEN') {
  //     valueNumber = 3;
  //     return valueNumber;
  //   }
  //   if (value === 'JACK') {
  //     valueNumber = 2;
  //     return valueNumber;
  //   }
  //   valueNumber = value;
  //   return valueNumber;
  // }

  // public countScores(cards: CardValues[]): number {
  //   return cards.reduce(
  //     (accumulator: number, currentCard: CardValues) =>
  //       accumulator + currentCard.value,
  //     0
  //   );
  // }

  // public takeCardPlayer(data: Cards) {
  //   this.workCards.cardsPlayer.push({
  //     image: data.cards[0].image,
  //     value: +this.convertValue(data.cards[0].value),
  //   });
  //   this.resultPlayer = this.countScores(this.workCards.cardsPlayer);
  //   this.showResultPlayer = this.resultPlayer;
  // }

  // public takeCardBankir(data: Cards) {
  //   if (this.resultBankir < 16) {
  //     this.workCards.cardsBankir.push({
  //       image: data.cards[1].image,
  //       value: +this.convertValue(data.cards[1].value),
  //     });
  //     this.resultBankir = this.countScores(this.workCards.cardsBankir);
  //     this.workCards.cardsBankirHidden.push(this.hiddenCard);
  //   }
  //   if (this.resultBankir >= 16) {
  //     this.showResultBankir = 'ПАС';
  //   }
  //   if (this.resultBankir > 21) {
  //     this.resultMessage = 'ВЫ ВЫИГРАЛИ!!! Bankir - ПЕРЕБОР!!!';
  //     this.showCards();
  //     return;
  //   }
  // }

  // public takeCards(cards: Cards) {
  //   this.takeCardPlayer(cards);
  //   if (this.resultPlayer > 21) {
  //     this.resultMessage = 'ПЕРЕБОР!!! ВЫ ПРОИГРАЛИ...';
  //     this.showCards();
  //     return;
  //   }
  //   if (this.resultPlayer === 21) {
  //     this.resultMessage = 'Player - 21!!! ВЫ ВЫИГРАЛИ!!!';
  //     this.showCards();
  //     return;
  //   }
  //   this.takeCardBankir(cards);
  //   if (this.resultBankir === 21) {
  //     this.resultMessage = 'Bankir - "21"!!! ВЫ ПРОИГРАЛИ...';
  //     this.showCards();
  //     return;
  //   }
  // }

  // public showCards() {
  //   this.showResultBankir = this.resultBankir;
  //   this.workCards.cardsBankirHidden = this.workCards.cardsBankir.map(
  //     (card: CardValues) => {
  //       return card.image;
  //     }
  //   );
  // }

  // public pass(cards: Cards) {
  //   this.launchTakeCardBankir(cards);
  //   if (this.resultBankir > 21) {
  //     this.resultMessage = 'ВЫ ВЫИГРАЛИ!!! Bankir - ПЕРЕБОР!!!';
  //     return;
  //   }
  //   if (this.resultBankir === this.resultPlayer) {
  //     this.resultMessage = 'НИЧЬЯ!!!';
  //     return;
  //   }
  //   if (this.resultBankir > this.resultPlayer) {
  //     this.resultMessage = 'ВЫ ПРОИГРАЛИ...';
  //     return;
  //   }
  //   if (this.resultBankir < this.resultPlayer) {
  //     this.resultMessage = 'ВЫ ВЫИГРАЛИ!!!';
  //     return;
  //   }
  // }

  // public compare() {
  //   if (this.resultPlayer > 21) {
  //     this.resultMessage = 'ПЕРЕБОР!!! ВЫ ПРОИГРАЛИ...';
  //   }
  // }

  // public launchTakeCardBankir(cards: Cards) {
  //   this.takeCardBankir(cards);
  //   if (this.resultBankir < 16) {
  //     this.launchTakeCardBankir(cards);
  //   }
  // }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { BaseComponent } from 'src/app/components/base.component';
import { Cards } from 'src/app/models/black-jack-models/black-jackModels';
import { takeUntil } from 'rxjs';
import { newDeck, hiddenCard } from '../variables';
import { BjService } from 'src/app/services/black-jack/bj.service';
import {
  WorkCards,
  Result,
  CardValues,
} from 'src/app/models/black-jack-models/black-jackModels';

@Component({
  selector: 'app-control-bj',
  templateUrl: './control-bj.component.html',
  styleUrls: ['./control-bj.component.scss'],
})
export class ControlBjComponent extends BaseComponent {
  @Output() updateResult: EventEmitter<Result> = new EventEmitter<Result>();

  public resultPlayer: number = 0;
  public resultBankir: number = 0;
  public takeCardLink: string = '';
  public takeCardDisabled: boolean = true;
  public passDisabled: boolean = true;
  public newDeck = newDeck;
  public hiddenCard: string = hiddenCard;
  ///

  private _showResult: Result = {
    resultPlayer: '',
    resultMessage: '',
    resultBankir: '',
    resultCardsPlayer: [],
    resultCardsBankir: [],
  };

  public workCards: WorkCards = {
    cardsPlayer: [],
    cardsBankir: [],
    cardsBankirHidden: [],
  };

  public constructor(private bjService: BjService) {
    super();
  }

  public shuffleDeck(link: string) {
    this._setStartValues();
    this.bjService
      .getCards(link)
      .pipe(takeUntil(this._destroy$$))
      .subscribe((deck) => {
        this.takeCardLink = `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=2`;
        this.updateResult.emit(this._showResult);
        this.takeCardDisabled = !this.takeCardDisabled;
      });
  }

  public makeMove(link: string) {
    this.bjService
      .getCards(link)
      .pipe(takeUntil(this._destroy$$))
      .subscribe((cards: Cards) => {
        this.takeCards(cards);
        this.updateResult.emit(this._showResult);
        this.passDisabled = false;
      });
  }

  public passPlayer(link: string) {
    this.bjService
      .getCards(link)
      .pipe(takeUntil(this._destroy$$))
      .subscribe((cards: Cards) => {
        this.pass(cards, link);
        this.showCards();
        this.updateResult.emit(this._showResult);
      });
  }
  //==============================================

  private _startDisabled() {
    this.takeCardDisabled = true;
    this.passDisabled = true;
  }

  private _setStartValues() {
    this.workCards.cardsPlayer = [];
    this.workCards.cardsBankir = [];
    this.resultPlayer = 0;
    this.resultBankir = 0;
    this._showResult.resultPlayer = '---';
    this._showResult.resultBankir = '---';
    this._showResult.resultMessage = 'ИГРА... ВОЗЬМИТЕ КАРТУ';
    this._showResult.resultCardsPlayer = [];
    this._showResult.resultCardsBankir = [];
  }

  private _convertValue(value: string) {
    let valueNumber;
    if (value === 'ACE') {
      valueNumber = 11;
      return valueNumber;
    }
    if (value === 'KING') {
      valueNumber = 4;
      return valueNumber;
    }
    if (value === 'QUEEN') {
      valueNumber = 3;
      return valueNumber;
    }
    if (value === 'JACK') {
      valueNumber = 2;
      return valueNumber;
    }
    valueNumber = value;
    return valueNumber;
  }

  private _countScores(cards: CardValues[]): number {
    return cards.reduce(
      (accumulator: number, currentCard: CardValues) =>
        accumulator + currentCard.value,
      0
    );
  }

  public takeCardPlayer(data: Cards) {
    this._showResult.resultCardsPlayer.push({
      image: data.cards[0].image,
      value: +this._convertValue(data.cards[0].value),
    });
    this.resultPlayer = this._countScores(this._showResult.resultCardsPlayer);
    this._showResult.resultPlayer = this.resultPlayer;
  }

  public takeCardBankir(data: Cards) {
    if (this.resultBankir < 16) {
      this.workCards.cardsBankir.push({
        image: data.cards[1].image,
        value: +this._convertValue(data.cards[1].value),
      });
      this.resultBankir = this._countScores(this.workCards.cardsBankir);
      this._showResult.resultCardsBankir.push(this.hiddenCard);
    }
    if (this.resultBankir >= 16) {
      this._showResult.resultBankir = 'ПАС';
    }
    if (this.resultBankir > 21) {
      this._showResult.resultMessage = 'ВЫ ВЫИГРАЛИ!!! Bankir - ПЕРЕБОР!!!';
      this.showCards();
      this._startDisabled();
      return;
    }
  }

  public takeCards(cards: Cards) {
    this.takeCardPlayer(cards);
    if (this.resultPlayer > 21) {
      this._showResult.resultMessage = 'ПЕРЕБОР!!! ВЫ ПРОИГРАЛИ...';
      this.showCards();
      this._startDisabled();
      return;
    }
    if (this.resultPlayer === 21) {
      this._showResult.resultMessage = 'Player - 21!!! ВЫ ВЫИГРАЛИ!!!';
      this.showCards();
      this._startDisabled();
      return;
    }
    this.takeCardBankir(cards);
    if (this.resultBankir === 21) {
      this._showResult.resultMessage = 'Bankir - "21"!!! ВЫ ПРОИГРАЛИ...';
      this.showCards();
      this._startDisabled();
      return;
    }
  }

  public showCards() {
    this._showResult.resultBankir = this.resultBankir;
    this._showResult.resultCardsBankir = this.workCards.cardsBankir.map(
      (card: CardValues) => {
        return card.image;
      }
    );
  }

  public pass(cards: Cards, link: string) {
    this.launchTakeCardBankir(cards, link);
    if (this.resultBankir > 21) {
      this._showResult.resultMessage = 'ВЫ ВЫИГРАЛИ!!! Bankir - ПЕРЕБОР!!!';
      this._startDisabled();
      return;
    }
    if (this.resultBankir === this.resultPlayer) {
      this._showResult.resultMessage = 'НИЧЬЯ!!!';
      this._startDisabled();
      return;
    }
    if (this.resultBankir > this.resultPlayer) {
      this._showResult.resultMessage = 'ВЫ ПРОИГРАЛИ...';
      this._startDisabled();
      return;
    }
    if (this.resultBankir < this.resultPlayer) {
      this._showResult.resultMessage = 'ВЫ ВЫИГРАЛИ!!!';
      this._startDisabled();
      return;
    }
  }

  public compare() {
    if (this.resultPlayer > 21) {
      this._showResult.resultMessage = 'ПЕРЕБОР!!! ВЫ ПРОИГРАЛИ...';
      this._startDisabled();
    }
  }

  public launchTakeCardBankir(cards: Cards, link: string) {
    this.takeCardBankir(cards);
    if (this.resultBankir < 16) {
      this.passPlayer(link);
    }
  }
}

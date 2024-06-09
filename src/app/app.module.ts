import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BjService } from './services/black-jack/bj.service';
import { TasksService } from './services/tasks/tasks.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/H_F_OffCanv/header/header.component';
import { FooterComponent } from './components/H_F_OffCanv/footer/footer.component';
import { OffcanvasComponent } from './components/H_F_OffCanv/offcanvas/offcanvas.component';
import { BlackJackComponent } from './components/main-practice/black-jack/black-jack.component';
import { TableComponent } from './components/main-practice/table/table.component';
import { HorsesComponent } from './components/main-practice/horses/horses.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SquareComponent } from './components/tasks/task_square/square/square.component';
import { HorsesAssemblyComponent } from './components/main-practice/horses/horses-assembly/horses-assembly.component';
import { DiceComponent } from './components/main-practice/horses/horses-assembly/dice/dice.component';
import { InfoComponent } from './components/main-practice/horses/horses-assembly/info/info.component';
import { PlaceComponent } from './components/main-practice/horses/horses-assembly/place/place.component';
import { VowelsComponent } from './components/tasks/task_vowels/vowels/vowels.component';
import { SquareCodeComponent } from './components/tasks/task_square/square-code/square-code.component';
import { VowelsCodeComponent } from './components/tasks/task_vowels/vowels-code/vowels-code.component';
import { FindWordComponent } from './components/tasks/task_find _word/find-word/find-word.component';
import { FindWordCodeComponent } from './components/tasks/task_find _word/find-word-code/find-word-code.component';
import { MatrixComponent } from './components/tasks/task_matrix/matrix/matrix.component';
import { MatrixCodeComponent } from './components/tasks/task_matrix/matrix-code/matrix-code.component';
import { BaseComponent } from './components/base.component';
import { ControlBjComponent } from './components/main-practice/black-jack/control-bj/control-bj.component';
import { InfoBjComponent } from './components/main-practice/black-jack/info-bj/info-bj.component';
import { CardsBankirComponent } from './components/main-practice/black-jack/place-bj/cards-bankir/cards-bankir.component';
import { CardsPlayerComponent } from './components/main-practice/black-jack/place-bj/cards-player/cards-player.component';
import { DeckComponent } from './components/main-practice/black-jack/place-bj/deck/deck.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OffcanvasComponent,
    BlackJackComponent,
    TableComponent,
    HorsesComponent,
    TasksComponent,
    SquareComponent,
    HorsesAssemblyComponent,
    DiceComponent,
    InfoComponent,
    PlaceComponent,
    VowelsComponent,
    SquareCodeComponent,
    VowelsCodeComponent,
    FindWordComponent,
    FindWordCodeComponent,
    MatrixComponent,
    MatrixCodeComponent,
    BaseComponent,
    ControlBjComponent,
    InfoBjComponent,
    CardsBankirComponent,
    CardsPlayerComponent,
    DeckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [TasksService, BjService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlackJackComponent } from './components/main-practice/black-jack/black-jack.component';
import { TableComponent } from './components/main-practice/table/table.component';
import { HorsesComponent } from './components/main-practice/horses/horses.component';
import { SquareCodeComponent } from './components/tasks/task_square/square-code/square-code.component';
import { VowelsCodeComponent } from './components/tasks/task_vowels/vowels-code/vowels-code.component';
import { FindWordCodeComponent } from './components/tasks/task_find _word/find-word-code/find-word-code.component';
import { MatrixCodeComponent } from './components/tasks/task_matrix/matrix-code/matrix-code.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'black-jack', component: BlackJackComponent },
  { path: 'table', component: TableComponent },
  { path: 'horses', component: HorsesComponent },
  { path: 'square_code', component: SquareCodeComponent },
  { path: 'vowels_code', component: VowelsCodeComponent },
  { path: 'find_word_code', component: FindWordCodeComponent },
  { path: 'matrix_code', component: MatrixCodeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

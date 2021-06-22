import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from 'src/app/components/cardapio/cardapio.component';
import { FinalizacaoComponent } from 'src/app/components/finalizacao/finalizacao.component';
import { HomeComponent } from '../../components/home/home.component';

/**
 * Define App routes
 */
const APP_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cardapio',
    component: CardapioComponent,
  },
  {
    path: 'finalizacao',
    component: FinalizacaoComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [],
})
export class AppRoutingModule { }
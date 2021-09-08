import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from 'src/app/components/cardapio/cardapio.component';
import { FilaPedidosAtivosComponent } from 'src/app/components/fila-pedidos-ativos/fila-pedidos-ativos.component';
import { FilaPedidosFinalizadosComponent } from 'src/app/components/fila-pedidos-finalizados/fila-pedidos-finalizados.component';
import { FinalizacaoComponent } from 'src/app/components/finalizacao/finalizacao.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HomeComponent } from '../../components/home/home.component';

/**
 * Define App routes
 */
const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
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
  {
    path: 'administrativo',
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: LoginComponent,
          },
        ],
      },
      {
        path: 'fila-pedidos-ativos',
        children: [
          {
            path: '',
            component: FilaPedidosAtivosComponent,
          },
        ],
      },
      {
        path: 'fila-pedidos-finalizados',
        children: [
          {
            path: '',
            component: FilaPedidosFinalizadosComponent,
          },
        ],
      },
    ],
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
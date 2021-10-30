import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { MaterialModule } from './modules/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './components/app/app.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalFinalizacaoPedido } from './components/utils/modal-finalizacao/modal-finalizacao-pedido.component';
import { HttpClientModule } from '@angular/common/http';
import { FinalizacaoComponent } from './components/finalizacao/finalizacao.component';
import { FilaPedidosAtivosComponent } from './components/fila-pedidos-ativos/fila-pedidos-ativos.component';
import { FilaPedidosFinalizadosComponent } from './components/fila-pedidos-finalizados/fila-pedidos-finalizados.component';
import { LoginComponent } from './components/login/login.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { ModalExibicaoItensComponent } from './components/utils/modal-exibicao-itens/modal-exibicao-itens.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CardapioComponent,
    ModalFinalizacaoPedido,
    FinalizacaoComponent,
    FilaPedidosAtivosComponent,
    FilaPedidosFinalizadosComponent,
    ListaProdutosComponent,
    EditarProdutoComponent,
    CadastrarProdutoComponent,
    ModalExibicaoItensComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register(
      'ngsw-worker.js',
      {
        enabled: environment.production
      }
    )
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [ModalFinalizacaoPedido],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardapioComponent,
    ModalFinalizacaoPedido,
    FinalizacaoComponent,
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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
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

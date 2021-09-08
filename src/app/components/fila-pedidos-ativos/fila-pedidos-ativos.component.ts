import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from 'src/app/interfaces/produto';
import { CardapioService } from 'src/app/services/cardapio/cardapio.service';
import { ModalFinalizacaoPedido } from '../utils/modal-finalizacao/modal-finalizacao-pedido.component';

@Component({
  selector: 'app-fila-pedidos-ativos',
  templateUrl: './fila-pedidos-ativos.component.html',
  styleUrls: ['./fila-pedidos-ativos.component.css']
})
export class FilaPedidosAtivosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'preco'];
  pedidos: Produto[] = [];

  constructor(
    private cardapioService: CardapioService
  ) { }

  /**
   * Método de inicialização
   * Busca todos os pedidos da fila
   */
  async ngOnInit() {
    await this.cardapioService.getAllProdutos()
      .toPromise().then((produtos) => {
        this.pedidos = (produtos as any).content
      })
  }

}
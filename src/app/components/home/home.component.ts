import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pedido } from 'src/app/interfaces/pedido';
import { FilaPedidosAtivosService } from 'src/app/services/fila-pedidos-ativos/fila-pedidos-ativos.service';
import { ModalExibicaoItensComponent } from '../utils/modal-exibicao-itens/modal-exibicao-itens.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['itensPedidos', 'status'];

  /**
   * Lista de pedidos
   */
  pedidos: Pedido[] = null;


  constructor(
    private dialog: MatDialog,
    private filaPedidosAtivosService: FilaPedidosAtivosService,
  ) { }

  /**
   * Método de inicialização
   */
  ngOnInit() {
    this.buscarPedidosAtivos();
  }

  /**
   * Busca todos os pedidos ativos da fila
   */
  async buscarPedidosAtivos() {
    await this.filaPedidosAtivosService.getAllByStatusNao(3).toPromise().then((pedidosAtivos) => {
      this.pedidos = (pedidosAtivos as Pedido[]);
      this.tratarPedidos();
    })
  }

  /**
   * Junta todos os itens do pedidos em uma string dividida por virgulas para realizar a exibição
   */
  tratarPedidos() {
    let itensPedidos = [];
    this.pedidos = this.pedidos.filter((pedido) => pedido.mesa === 1 && pedido)
    this.pedidos.forEach((pedido, index) => {
      pedido.carrinhoPedidos.forEach((item) => { itensPedidos.push(item.produto.nome); });
      this.pedidos[index].itensPedidos = itensPedidos;
    });
  }

  /**
   * Abre a modal de exibição dos produtos recebidos por parâmetro.
   */
   abrirModalExibicaoItens(pedido: Pedido): void {
    const dialogRef = this.dialog.open(ModalExibicaoItensComponent, {
      width: '500px',
      data: { pedido: pedido }
    });

    dialogRef.afterClosed().subscribe(result => {
      pedido = result;
    });
  }

}

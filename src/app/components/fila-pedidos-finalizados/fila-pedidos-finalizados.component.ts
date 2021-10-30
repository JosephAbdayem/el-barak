import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pedido } from 'src/app/interfaces/pedido';
import { FilaPedidosFinalizadosService } from 'src/app/services/fila-pedidos-finalizados/fila-pedidos-finalizados.service';
import { ModalExibicaoItensComponent } from '../utils/modal-exibicao-itens/modal-exibicao-itens.component';

@Component({
  selector: 'app-fila-pedidos-finalizados',
  templateUrl: './fila-pedidos-finalizados.component.html',
  styleUrls: ['./fila-pedidos-finalizados.component.css']
})
export class FilaPedidosFinalizadosComponent implements OnInit {

  displayedColumns: string[] = [
    'itensPedidos',
    'mesa',
    'usuario',
    'dataCadastro',
    'status'
  ];

  pedidos: Pedido[] = [];

  constructor(
    private dialog: MatDialog,
    private filaPedidosFinalizadosService: FilaPedidosFinalizadosService
  ) { }

  /**
   * Método de inicialização
   * Busca todos os pedidos ativos da fila
   */
  async ngOnInit() {
    await this.filaPedidosFinalizadosService.getAllByStatus(3).toPromise().then((pedidosAtivos) => {
        this.pedidos = (pedidosAtivos as Pedido[])
        this.tratarPedidos()
      })
  }

  /**
   * Junta todos os itens do pedidos em uma string dividida por virgulas para realizar a exibição
   */
  tratarPedidos() {
    let itensPedidos = [];
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
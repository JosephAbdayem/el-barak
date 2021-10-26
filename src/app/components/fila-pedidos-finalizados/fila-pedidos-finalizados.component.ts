import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/interfaces/pedido';
import { FilaPedidosFinalizadosService } from 'src/app/services/fila-pedidos-finalizados/fila-pedidos-finalizados.service';

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
      this.pedidos[index].itensPedidos = itensPedidos.join(', ');
    });
  }

}
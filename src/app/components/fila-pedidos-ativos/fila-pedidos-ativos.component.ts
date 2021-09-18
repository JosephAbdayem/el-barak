import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/interfaces/pedido';
import { Status } from 'src/app/interfaces/status';
import { FilaPedidosAtivosService } from 'src/app/services/fila-pedidos-ativos/fila-pedidos-ativos.service';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-fila-pedidos-ativos',
  templateUrl: './fila-pedidos-ativos.component.html',
  styleUrls: ['./fila-pedidos-ativos.component.css']
})
export class FilaPedidosAtivosComponent implements OnInit {

  displayedColumns: string[] = ['itensPedidos', 'mesa', 'usuario', 'dataCadastro', 'status'];
  pedidos: Pedido[] = [];
  status: Status[] = [];

  constructor(
    private statusService: StatusService,
    private filaPedidosAtivosService: FilaPedidosAtivosService,
  ) { }

  /**
   * Método de inicialização
   */
  ngOnInit() {
    this.buscarStatus();
    this.buscarPedidosAtivos();
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

  /**
   * Busca todos os status disponiveis 
   */
  async buscarStatus() {
    await this.statusService.getAll().toPromise().then((status) => {
      this.status = (status as any).content;
      console.log(this.status);
    })
  }

  /**
   * Busca todos os pedidos ativos da fila
   */
  async buscarPedidosAtivos() {
    await this.filaPedidosAtivosService.getAllByAtivo(true).toPromise().then((pedidosAtivos) => {
      this.pedidos = (pedidosAtivos as Pedido[]);
      this.tratarPedidos();
    })
  }

  atualizarStatusPedido(pedido: Pedido, status: Status) {
    pedido.status = status;
    console.log(pedido.status);
    console.log(status);
    
    this.filaPedidosAtivosService.insertPedidoCarrinho(pedido);
  }

}
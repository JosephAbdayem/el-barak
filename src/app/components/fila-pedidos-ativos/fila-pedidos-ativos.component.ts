import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pedido } from 'src/app/interfaces/pedido';
import { Status } from 'src/app/interfaces/status';
import { FilaPedidosAtivosService } from 'src/app/services/fila-pedidos-ativos/fila-pedidos-ativos.service';
import { StatusService } from 'src/app/services/status/status.service';
import { ModalExibicaoItensComponent } from '../utils/modal-exibicao-itens/modal-exibicao-itens.component';

@Component({
  selector: 'app-fila-pedidos-ativos',
  templateUrl: './fila-pedidos-ativos.component.html',
  styleUrls: ['./fila-pedidos-ativos.component.css']
})
export class FilaPedidosAtivosComponent implements OnInit {

  displayedColumns: string[] = ['itensPedidos', 'mesa', 'usuario', 'dataCadastro', 'status'];

  /**
   * Lista de pedidos
   */
  pedidos: Pedido[] = null;

  /**
   * Lista de status disponiveis
   */
  status: Status[] = null;

  constructor(
    private dialog: MatDialog,
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
   * Busca todos os status disponiveis 
   */
  async buscarStatus() {
    await this.statusService.getAll().toPromise().then((status) => {
      this.status = (status as any).content;
    })
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
    this.pedidos.forEach((pedido, index) => {
      pedido.carrinhoPedidos.forEach((item) => { itensPedidos.push(item.produto.nome); });
      this.pedidos[index].itensPedidos = itensPedidos;
    });
  }

  /**
   * Recebe o pedido requerido e o status para realizar a atualização na base de dados
   * @param pedido Pedido a ter o status alterado
   * @param status Status selecionado pelo usuario na interface
   */
  atualizarStatusPedido(pedido: Pedido, status: any) {
    pedido.status = this.status.filter((statusSingular) => statusSingular.nome === status)[0];
    this.filaPedidosAtivosService.insertPedidoCarrinho(pedido).toPromise()
      .finally(() => { this.buscarPedidosAtivos() });
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
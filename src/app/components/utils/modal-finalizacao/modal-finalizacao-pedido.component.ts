import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CarrinhoPedido } from 'src/app/interfaces/carrinho-pedido';
import { Pedido } from 'src/app/interfaces/pedido';
import { Status } from 'src/app/interfaces/status';
import { Usuario } from 'src/app/interfaces/usuario';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'modal-finzalicacao-pedido',
  templateUrl: './modal-finalizacao-pedido.component.html',
  styleUrls: ['./modal-finalizacao-pedido.component.css']
})

export class ModalFinalizacaoPedido implements OnInit {
  displayedColumns: string[] = ['nome', 'preco', 'quantidade'];
  pedido: Pedido = {} as Pedido;
  carrinhoPedido: CarrinhoPedido;
  totalCompra: number = 0;

  constructor(
    public dialogRef: MatDialogRef<ModalFinalizacaoPedido>,
    private router: Router,
    private pedidoService: PedidoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  /**
   * Método de iniciação
   */
  ngOnInit() {
    this.calcularTotal();
  }

  /**
   * Realiza os calculos necessarios para encontrar o valor total da compra.
   */
  calcularTotal(): void {
    this.totalCompra = 0;
    this.data.produtosSelecionados.forEach((produto) => {
      this.totalCompra += (produto.preco * produto.quantidade);
    });
  }

  /**
   * Estrutura objeto pedido para envio ao back-end
   */
  criarPedido(): void {
    this.pedido = {
      "id": null,
      "dataCadastro": null,
      "dataAtualizacao": null,
      "ativo": true,
      "mesa": 1,
      "usuario": { "id": 1 } as Usuario,
      "status": { "id": 1 } as Status,
      "carrinhoPedidos": [],
    }
    this.inserirItensCarrinho();
  }

  /**
   * Estrutura objeto carrinhoPedido para envio ao back-end e executa a requisição.
   */
  async inserirItensCarrinho() {
    this.data.produtosSelecionados.forEach((produtoSelecionado) => {
      this.carrinhoPedido = {
        "id": { "pedidoId": null, "produtoId": null },
        "produto": produtoSelecionado,
        "quantidade": produtoSelecionado.quantidade,
      }
      delete produtoSelecionado.quantidade
      this.pedido.carrinhoPedidos.push(this.carrinhoPedido);
    });
    this.pedidoService.insertPedidoCarrinho(this.pedido).toPromise().then(() => {
      this.alterarRota();
    });
  }

  /**
   * Altera rota para pedido finalizado ao final da solicitação do pedido.
   */
  alterarRota(): void {
    setTimeout(() => {
      this.dialogRef.close();
      this.router.navigate(['/finalizacao']);
    }, 700);
  }

  /**
   * Ao clicar fora da modal a mesma é fechada
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

}

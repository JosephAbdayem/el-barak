import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'modal-finzalicacao-pedido',
  templateUrl: './modal-finalizacao-pedido.component.html',
  styleUrls: ['./modal-finalizacao-pedido.component.css']

})

export class ModalFinalizacaoPedido implements OnInit {
  displayedColumns: string[] = ['nome', 'preco', 'quantidade'];

  totalCompra: number = 0;

  constructor(
    public dialogRef: MatDialogRef<ModalFinalizacaoPedido>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.totalCompra = 0;
    this.data.produtosSelecionados.forEach((produto) => {
      this.totalCompra += (produto.preco * produto.quantidade);
    });
  }

  alterarRota(): void {
    setTimeout(() => {
      this.dialogRef.close();
      this.router.navigate(['/finalizacao']);
    }, 700);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

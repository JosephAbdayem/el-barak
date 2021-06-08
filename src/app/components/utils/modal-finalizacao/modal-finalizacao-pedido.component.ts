import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'modal-finzalicacao-pedido',
  templateUrl: './modal-finalizacao-pedido.component.html',
  styleUrls: ['./modal-finalizacao-pedido.component.css']

})

export class ModalFinalizacaoPedido implements OnInit {
  displayedColumns: string[] = ['nome', 'preco', 'quantidade'];


  constructor(
    public dialogRef: MatDialogRef<ModalFinalizacaoPedido>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}

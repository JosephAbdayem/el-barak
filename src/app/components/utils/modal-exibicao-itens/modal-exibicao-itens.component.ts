import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-exibicao-itens',
  templateUrl: './modal-exibicao-itens.component.html',
  styleUrls: ['./modal-exibicao-itens.component.css']
})
export class ModalExibicaoItensComponent {
  displayedColumns: string[] = ['nome', 'quantidade'];


  constructor(
    public dialogRef: MatDialogRef<ModalExibicaoItensComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  /**
   * Ao clicar fora da modal a mesma é fechada
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

}

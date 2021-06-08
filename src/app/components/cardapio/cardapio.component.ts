import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalFinalizacaoPedido } from '../utils/modal-finalizacao/modal-finalizacao-pedido.component';

const PRATOS_PRINCIPAIS: any[] = [
  { position: 1, nome: 'Kebab de Frango', preco: 22, quantidade: 0 },
  { position: 2, nome: 'Kebab de Boi', preco: 25, quantidade: 0 },
  { position: 3, nome: 'Manakish de Frango', preco: 21.50, quantidade: 0 },
  { position: 4, nome: 'Manakish de Peito de Peru', preco: 23, quantidade: 0 },
];

const ACOMPANHAMENTOS: any[] = [
  { position: 1, nome: 'Batata frita', preco: 6, quantidade: 0 },
  { position: 2, nome: 'Falafel', preco: 6, quantidade: 0 },
];

const BEBIDAS: any[] = [
  { position: 1, nome: 'H20', preco: 6.50, quantidade: 0 },
  { position: 2, nome: 'Água sem gás 500ml', preco: 4, quantidade: 0 },
  { position: 3, nome: 'Água com gás 500ml', preco: 4, quantidade: 0 },
  { position: 4, nome: 'Coca Cola lata 350ml', preco: 5, quantidade: 0 },
  { position: 5, nome: 'Sprite lata 350ml', preco: 5, quantidade: 0 },
  { position: 6, nome: 'Coca Cola 600ml', preco: 7.90, quantidade: 0 },
];

const SOBREMESAS: any[] = [
  { position: 1, nome: 'Ninho com amêndoas', preco: 7, quantidade: 0 },
  { position: 2, nome: 'Ninho com nozes', preco: 8, quantidade: 0 },
  { position: 3, nome: 'Baklawa', preco: 7, quantidade: 0 },
  { position: 4, nome: 'Halawi', preco: 7, quantidade: 0 },
];

let PRODUTOS_SELECIONADOS: any[] = [
  { position: 1, nome: 'Ninho com teste', preco: 7, quantidade: 0 },
  { position: 2, nome: 'Ninho com nozes', preco: 8, quantidade: 0 },
  { position: 3, nome: 'Baklawa', preco: 7, quantidade: 0 },
  { position: 4, nome: 'Halawi', preco: 7, quantidade: 0 },
];

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})

export class CardapioComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  displayedColumns: string[] = ['nome', 'preco', 'quantidade'];
  pratosPrincipais = PRATOS_PRINCIPAIS;
  acompanhamentos = ACOMPANHAMENTOS;
  bebidas = BEBIDAS;
  sobremesas = SOBREMESAS;
  produtosSelecionados = PRODUTOS_SELECIONADOS;

  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  abrirModalFinalizarPedido(): void {
    console.log(this.produtosSelecionados);
    
    const dialogRef = this.dialog.open(ModalFinalizacaoPedido, {
      width: '500px',
      data: { produtosSelecionados: this.produtosSelecionados }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.produtosSelecionados = result;
    });
  }

}

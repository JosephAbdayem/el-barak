import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from 'src/app/interfaces/produto';
import { CardapioService } from 'src/app/services/cardapio.service';
import { ModalFinalizacaoPedido } from '../utils/modal-finalizacao/modal-finalizacao-pedido.component';

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
  produtos: Produto[] = [];
  pratosPrincipais: Produto[] = [];
  acompanhamentos: Produto[] = [];
  bebidas: Produto[] = [];
  sobremesas: Produto[] = [];
  produtosSelecionados: Produto[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private cardapioService: CardapioService
  ) { }

  async ngOnInit() {
    await this.cardapioService.getAllProdutos()
      .toPromise().then((produtos) => {
        this.separarProdutosPorCategoria(produtos);
      })
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  separarProdutosPorCategoria(produtos: any[]) {
    this.produtos = (produtos as any).content
    this.produtos.forEach((produto) => {
      produto.quantidade = 0;
      switch (((produto) as Produto).categoria.nome) {
        case 'Pratos principais': {
          this.pratosPrincipais.push(produto)
          break;
        }
        case 'Acompanhamentos': {
          this.acompanhamentos.push(produto)
          break;
        }
        case 'Bebidas': {
          this.bebidas.push(produto)
          break;
        }
        case 'Sobremesas': {
          this.sobremesas.push(produto)
          break;
        }
      }
    });
  }

  agruparProdutosSelecionados(): void {
    this.produtosSelecionados = [];
    [...this.pratosPrincipais, ...this.acompanhamentos, ...this.bebidas, ...this.sobremesas]
      .forEach((produto) => {
        if (produto.quantidade) {
          this.produtosSelecionados.push(produto);
        }
      });
  }

  abrirModalFinalizarPedido(): void {
    this.agruparProdutosSelecionados();
    const dialogRef = this.dialog.open(ModalFinalizacaoPedido, {
      width: '500px',
      data: { produtosSelecionados: this.produtosSelecionados }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.produtosSelecionados = result;
    });
  }


  alterarQuantidade(obj, acres) {
    if (!obj.quantidade && acres === -1) return
    obj.quantidade += acres;
  }

}

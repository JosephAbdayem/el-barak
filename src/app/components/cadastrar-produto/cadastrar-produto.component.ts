import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { Status } from 'src/app/interfaces/status';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  /**
   * Produto recebido do back-end.
   */
  public produto: Produto = null;

  /**
   * Lista de status disponiveis
   */
  status: Status[] = null;

  /**
  * Cargo form
 */
  public produtoForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private statusService: StatusService,
  ) { }

  /**
   * Retorna o formControl 'ativo'
   */
  get ativo() {
    return this.produtoForm.get('ativo');
  }

  /**
   * Retorna o formControl 'nome'
   */
  get nome() {
    return this.produtoForm.get('nome');
  }

  /**
   * Retorna o formControl 'descricao'
   */
  get descricao() {
    return this.produtoForm.get('descricao');
  }

  /**
   * Retorna o formControl 'preco'
   */
  get preco() {
    return this.produtoForm.get('preco');
  }

  /**
   * Retorna o formControl 'categoria'
   */
  get categoria() {
    return this.produtoForm.get('categoria');
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.produtoService.buscarPredicate(`id:${id}`).toPromise().then((produto) => {
          this.produto = (produto as any).content[0];
          this.produtoForm = this.inicializaForm();
          if (this.produto) {
            this.produtoForm.patchValue(this.produto);
          }
        })
      }
    });
  }

  /**
 * Inicializa form de cargo
 */
  inicializaForm(): FormGroup {
    return this.formBuilder.group({
      ativo: [false, Validators.compose([Validators.required])],
      nome: ['', Validators.compose([Validators.required])],
      descricao: ['', Validators.compose([Validators.required])],
      preco: [0, Validators.compose([Validators.required])],
      categoria: [{}, Validators.compose([Validators.required])]
    });
  }

  /**
   * Busca todos os status disponiveis 
   */
  async buscarStatus() {
    await this.statusService.getAll().toPromise().then((status) => {
      this.status = (status as any).content;
    })
  }

}

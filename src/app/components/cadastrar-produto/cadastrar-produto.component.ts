import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { Produto } from 'src/app/interfaces/produto';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  /**
   * Parametro recebido na url
   */
  public id: number = null;

  /**
   * Produto recebido do back-end.
   */
  public produto: Produto = null;

  /**
   * Lista de categoria disponiveis
   */
  public categorias: Categoria[] = null;

  /**
   * Cargo form
   */
  public produtoForm: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
  ) { }

  /**
   * Retorna o formControl 'nome'
   */
  get nome(): AbstractControl {
    return this.produtoForm.get('nome');
  }

  /**
   * Retorna o formControl 'descricao'
   */
  get descricao(): AbstractControl {
    return this.produtoForm.get('descricao');
  }

  /**
   * Retorna o formControl 'preco'
   */
  get preco(): AbstractControl {
    return this.produtoForm.get('preco');
  }

  /**
   * Retorna o formControl 'categoria'
   */
  get categoria(): AbstractControl {
    return this.produtoForm.get('categoria');
  }

  /**
   * Método de inicialização
   */
  ngOnInit(): void {
    this.buscarCategorias();
    this.produtoForm = this.inicializaForm();
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.produtoService.buscarPredicate(`id:${this.id}`).toPromise().then((produto) => {
          this.produto = (produto as any).content[0];
          this.produto ? this.produtoForm.patchValue(this.produto) : null;
        })
      }
    });
  }

  /**
   * Inicializa form de cargo
   */
  inicializaForm(): FormGroup {
    return this.formBuilder.group({
      id: [null, Validators.compose([Validators.required])],
      nome: ['', Validators.compose([Validators.required])],
      preco: ['', Validators.compose([Validators.required])],
      descricao: ['', Validators.compose([Validators.required])],
      categoria: ['', Validators.compose([Validators.required])],
      dataCadastro: ['', Validators.compose([Validators.required])],
      dataAtualizacao: ['', Validators.compose([Validators.required])],
    });
  }

  /**
   * Busca todos os categorias disponiveis 
   */
  async buscarCategorias() {
    await this.categoriaService.getAll().toPromise().then((categorias) => {
      this.categorias = (categorias as any).content;
    })
  }

  /**
   * Atualizar ou Criar produto na base de dados1
   */
  salvar() {
    if (typeof this.produtoForm.value.categoria === 'string') {
      this.produtoForm.value.categoria = this.categorias
        .filter((categoria) => categoria.nome === this.produtoForm.value.categoria)[0];
    }
    if (this.id) {
      this.produtoService.atualizar(this.produtoForm.value).toPromise().then(() => {
        this.router.navigate(['/administrativo/lista-produtos']);
      });
    } else {
      this.produtoService.cadastrar(this.produtoForm.value).toPromise().then(() => {
        this.router.navigate(['/administrativo/lista-produtos']);
      });
    }
  }

  /**
   * Valida categoria do produto na lista de possiveis categorias
   * @param o1 Nome categoria
   * @param o2 Objeto categoria
   * @returns Categoria encontrada
   */
  campararCategorias(o1: any, o2: any) {
    return (o1 == o2.nome);
  }

}

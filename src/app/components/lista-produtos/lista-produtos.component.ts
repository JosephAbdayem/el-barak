import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/interfaces/categoria';
import { Produto } from 'src/app/interfaces/produto';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  /**
   * Colunas da tabela a serem exibidas na tela de listagem de produtos.
   */
  public displayedColumns: string[] = ['nome', 'categoria', 'preco', 'ativo'];

  /**
   * Lista de produtos recebidos do back-end.
   */
  public produtos: Produto[] = null;

  /**
   * Lista de categorias disponiveis recebidas do back-end
   */
  public categorias: Categoria[] = null;

  /**
   * Formulário com todos os dados.
   */
  public formBusca: FormGroup;

  /**
   * Retorna o abstractControl "nomeProduto".
   */
  public get nomeProduto(): AbstractControl { return this.formBusca.get('nomeProduto'); }


  /**
   * Construtor da classe atual
   * @param produtoService Classe de requisições ao back-end  para a entidade de 'produto'
   * @param categoriaService Classe de requisições ao back-end  para a entidade de 'categoria'
   */
  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
  ) { }

  /**
   * Metodo de inicialização
   */
  ngOnInit() {
    this.buscarProdutos();
    this.buscarCategoriasProdutos();
    this.formBusca = this.formBuilder.group({
      nomeProduto: '',
    })
  }

  /**
   * Busca todos os produtos
   */
  async buscarProdutos() {
    await this.produtoService.getAll().toPromise().then((pedidos) => {
      this.produtos = (pedidos as any).content;
    })
  }

  /**
   * Busca todas as categorias
   */
  async buscarCategoriasProdutos() {
    await this.categoriaService.getAll().toPromise().then((categorias) => {
      this.categorias = [{ id: null, nome: 'Todos' }, ...(categorias as any).content];
    })
  }

  /**
   * Busca produtos de determinada categoria
   * @param categoria Categoria selecionada pelo usuario na interface
   */
  buscarProdutosCategoriaSelecionada(categoria: Categoria) {
    if (categoria.id) {
      this.produtoService.getAllPredicate(`categoria_id:${categoria.id}`).toPromise().then((pedidos) => {
        this.produtos = (pedidos as any).content;
      })
    } else {
      this.buscarProdutos();
    }
  }

  /**
   * Realiza a busca de produtos pelo nome desejado
   * @param nomeProduto Nome do produto inserido pelo usuario na interface
   */
  buscarProdutosNomeSelecionado() {
    if (this.formBusca.value.nomeProduto) {
      this.produtoService.getAllPredicate(`nome:${this.formBusca.value.nomeProduto}`).toPromise().then((pedidos) => {
        console.log((pedidos as any).content);
        this.produtos = (pedidos as any).content;
      })
    } else {
      this.buscarProdutos();
    }
  }
}
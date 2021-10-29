import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/interfaces/produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtoUrl = '/produtos';
  constructor(private http: HttpClient) { }


  /**
   * Busca todos os produtos
   * @returns 
   */
  buscarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${environment.urlBase}${this.produtoUrl}`)
  }

  /**
   * Busca todos os produtos que satisfazem a condição proposta
   * @returns 
   */
  buscarPredicate(search: any): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${environment.urlBase}${this.produtoUrl}?search=START+${search}`)
  }

  /**
  * Busca todos os produtos que satisfazem a condição proposta
  * @returns 
  */
  cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${environment.urlBase}${this.produtoUrl}`, produto)
  }

  /**
  * Busca todos os produtos que satisfazem a condição proposta
  * @returns 
  */
  atualizar(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${environment.urlBase}${this.produtoUrl}/${produto.id}`, produto)
  }

  /**
   * Deleta logicamente o produto recebido por parametro e atualiza a atividade para falso.
   * @param produto protudo a ser deletado
   */
  deletar(produto: Produto): Observable<any> {
    produto.ativo = false;
    return this.http.put<Produto>(`${environment.urlBase}${this.produtoUrl}/${produto.id}`, produto)
  }
}

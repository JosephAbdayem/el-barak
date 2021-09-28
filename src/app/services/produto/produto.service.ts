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
  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${environment.urlBase}${this.produtoUrl}`)
  }

  /**
   * Busca todos os produtos que satisfazem a condição proposta
   * @returns 
   */
  getAllPredicate(search): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${environment.urlBase}${this.produtoUrl}?search=START+${search}`)
  }
}

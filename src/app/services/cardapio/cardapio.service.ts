import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  private produtoUrl = '/produtos';
  constructor(private http: HttpClient) { }

  /**
   * Busca todos os produtos do back-end
   * @returns 
   */
  getAllProdutos(): Observable<any[]> {
    return this.http.get<any[]>(environment.urlBase + this.produtoUrl)
  }
}

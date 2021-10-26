import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilaPedidosFinalizadosService  {
  private produtoUrl = '/pedidos';
  constructor(private http: HttpClient) { }

  /**
   * Busca todos os pedidos com o atividade requerida do back-end
   * @returns 
   */
  getAllByStatus(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.urlBase}${this.produtoUrl}/status/carrinho/${id}`)
  }
}
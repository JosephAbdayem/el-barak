import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/interfaces/pedido';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilaPedidosAtivosService {
  private pedidoUrl = '/pedidos';
  constructor(private http: HttpClient) { }

  /**
   * Busca todos os pedidos com o atividade requerida do back-end
   * @returns 
   */
  getAllByStatusNao(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.urlBase}${this.pedidoUrl}/nao-status/carrinho/${id}`)
  }

  insertPedidoCarrinho(pedido: Pedido): Observable<any[]> {
    return this.http.put<any[]>(`${environment.urlBase}${this.pedidoUrl}/carrinho`, pedido)
  }
}

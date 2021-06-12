import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/interfaces/pedido';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedidoUrl = '/pedidos';
  constructor(private http: HttpClient) { }

  /**
   * Cria pedido requerito pelo cliente
   * @param pedido objeto do pedido contendo os itens do mesmo
   * @returns pedido criado no back-end
   */
  insertPedidoCarrinho(pedido: Pedido): Observable<any[]> {
    return this.http.post<any[]>(`${environment.urlBase}${this.pedidoUrl}/carrinho`, pedido)
  }
}

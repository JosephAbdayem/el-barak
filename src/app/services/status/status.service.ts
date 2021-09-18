import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/interfaces/pedido';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private produtoUrl = '/status';
  constructor(private http: HttpClient) { }

  /**
   * Busca todos os status do back-end
   * @returns 
   */
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.urlBase}${this.produtoUrl}`)
  }
}

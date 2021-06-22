import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PalavraService {
  private produtoUrl = '/palavra';
  constructor(private http: HttpClient) { }

  /**
   * Busca todos os produtos do back-end
   * @returns 
   */
  sortearPalavras(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.urlBase}${this.produtoUrl}/sortear`)
  }
}

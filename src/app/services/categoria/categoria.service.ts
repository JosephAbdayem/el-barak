import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categoriaUrl = '/categorias';
  constructor(private http: HttpClient) { }


  /**
   * Busca todas as categorias
   * @returns 
   */
  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${environment.urlBase}${this.categoriaUrl}`)
  }
}

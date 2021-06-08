import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  private produtoUrl = '/produtos';  // URL to web api
  constructor(private http: HttpClient) { }

  getAllProdutos(): Observable<any[]> {
    return this.http.get<any[]>(environment.urlBase + this.produtoUrl)
  }
}

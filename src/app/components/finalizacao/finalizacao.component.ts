import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.css']
})
export class FinalizacaoComponent implements OnInit {

  constructor(private router: Router) { }

  /**
   * Método de inicialização
   * Aguarda 10 segundos e retorna a página de inicialização do fluxo.
   */
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 5000);
  }

}

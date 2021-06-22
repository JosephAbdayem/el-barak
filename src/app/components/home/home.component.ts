import { Component, OnInit } from '@angular/core';
import { PalavraService } from 'src/app/services/palavra/palavra.service';

import * as SockJS from 'src/assets/sockjs.min.js';
import * as Stomp from 'src/assets/stomp.min.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  palavras: string[] = [];
  constructor(private palavraService: PalavraService
  ) { }

  async ngOnInit() {
    await this.palavraService.sortearPalavras()
      .toPromise().then((palavras) => {
        this.palavras = palavras;
      })
  }
}

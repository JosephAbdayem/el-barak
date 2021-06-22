import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'el-barak';
  constructor(private router: Router) { }

  /**
   * Método de inicialização
   * Redireciona à página home
   */
  ngOnInit(): void {
    this.router.navigate(['/home']);
  }
}

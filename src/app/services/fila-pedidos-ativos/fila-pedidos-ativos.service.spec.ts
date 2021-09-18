import { TestBed } from '@angular/core/testing';

import { FilaPedidosAtivosService } from './fila-pedidos-ativos.service';

describe('FilaPedidosAtivosService', () => {
  let service: FilaPedidosAtivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilaPedidosAtivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

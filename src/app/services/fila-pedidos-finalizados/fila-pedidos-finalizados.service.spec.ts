import { TestBed } from '@angular/core/testing';

import { FilaPedidosFinalizadosService } from './fila-pedidos-finalizados.service';

describe('FilaPedidosFinalizadosService', () => {
  let service: FilaPedidosFinalizadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilaPedidosFinalizadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

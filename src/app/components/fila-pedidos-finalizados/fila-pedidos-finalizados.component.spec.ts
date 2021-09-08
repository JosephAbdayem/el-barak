import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaPedidosFinalizadosComponent } from './fila-pedidos-finalizados.component';

describe('FilaPedidosFinalizadosComponent', () => {
  let component: FilaPedidosFinalizadosComponent;
  let fixture: ComponentFixture<FilaPedidosFinalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaPedidosFinalizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaPedidosFinalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

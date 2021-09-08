import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaPedidosAtivosComponent } from './fila-pedidos-ativos.component';

describe('FilaPedidosAtivosComponent', () => {
  let component: FilaPedidosAtivosComponent;
  let fixture: ComponentFixture<FilaPedidosAtivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaPedidosAtivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaPedidosAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

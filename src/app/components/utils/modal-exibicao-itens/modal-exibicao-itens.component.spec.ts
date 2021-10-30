import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExibicaoItensComponent } from './modal-exibicao-itens.component';

describe('ModalExibicaoItensComponent', () => {
  let component: ModalExibicaoItensComponent;
  let fixture: ComponentFixture<ModalExibicaoItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExibicaoItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExibicaoItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

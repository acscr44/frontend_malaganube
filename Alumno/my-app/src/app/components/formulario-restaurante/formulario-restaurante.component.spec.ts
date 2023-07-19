import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRestauranteComponent } from './formulario-restaurante.component';

describe('FormularioRestauranteComponent', () => {
  let component: FormularioRestauranteComponent;
  let fixture: ComponentFixture<FormularioRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioRestauranteComponent]
    });
    fixture = TestBed.createComponent(FormularioRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

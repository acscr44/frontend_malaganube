import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicosNgComponent } from './basicos-ng.component';

describe('BasicosNgComponent', () => {
  let component: BasicosNgComponent;
  let fixture: ComponentFixture<BasicosNgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicosNgComponent]
    });
    fixture = TestBed.createComponent(BasicosNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

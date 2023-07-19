import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APINorrisComponent } from './api-norris.component';

describe('APINorrisComponent', () => {
  let component: APINorrisComponent;
  let fixture: ComponentFixture<APINorrisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APINorrisComponent]
    });
    fixture = TestBed.createComponent(APINorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

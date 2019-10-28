import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocztaPolskaComponent } from './poczta-polska.component';

describe('PocztaPolskaComponent', () => {
  let component: PocztaPolskaComponent;
  let fixture: ComponentFixture<PocztaPolskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocztaPolskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocztaPolskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

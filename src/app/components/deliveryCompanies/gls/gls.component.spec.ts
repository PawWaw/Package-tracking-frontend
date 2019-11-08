import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlsComponent } from './gls.component';

describe('GlsComponent', () => {
  let component: GlsComponent;
  let fixture: ComponentFixture<GlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

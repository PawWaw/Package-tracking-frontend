import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllegroComponent } from './allegro.component';

describe('AllegroComponent', () => {
  let component: AllegroComponent;
  let fixture: ComponentFixture<AllegroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllegroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

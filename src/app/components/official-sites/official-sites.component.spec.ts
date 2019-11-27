import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialSitesComponent } from './official-sites.component';

describe('OfficialSitesComponent', () => {
  let component: OfficialSitesComponent;
  let fixture: ComponentFixture<OfficialSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

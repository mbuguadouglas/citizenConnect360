import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenIncidentsComponent } from './citizen-incidents.component';

describe('CitizenIncidentsComponent', () => {
  let component: CitizenIncidentsComponent;
  let fixture: ComponentFixture<CitizenIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizenIncidentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

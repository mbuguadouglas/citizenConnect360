import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenViewsComponent } from './citizen-views.component';

describe('CitizenViewsComponent', () => {
  let component: CitizenViewsComponent;
  let fixture: ComponentFixture<CitizenViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizenViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenPollsComponent } from './citizen-polls.component';

describe('CitizenPollsComponent', () => {
  let component: CitizenPollsComponent;
  let fixture: ComponentFixture<CitizenPollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizenPollsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

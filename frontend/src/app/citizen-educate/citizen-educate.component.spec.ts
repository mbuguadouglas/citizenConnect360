import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenEducateComponent } from './citizen-educate.component';

describe('CitizenEducateComponent', () => {
  let component: CitizenEducateComponent;
  let fixture: ComponentFixture<CitizenEducateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizenEducateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenEducateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducateChatComponent } from './educate-chat.component';

describe('EducateChatComponent', () => {
  let component: EducateChatComponent;
  let fixture: ComponentFixture<EducateChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducateChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducateChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

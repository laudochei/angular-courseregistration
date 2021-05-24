import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseRegistrationComponent } from './create-courseregistration.component';

describe('CreateCourseRegistrationComponent', () => {
  let component: CreateCourseRegistrationComponent;
  let fixture: ComponentFixture<CreateCourseRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCourseRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

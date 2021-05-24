import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCourseRegistrationComponent } from './update-courseregistration.component';

describe('UpdateCourseRegistrationComponent', () => {
  let component: UpdateCourseRegistrationComponent;
  let fixture: ComponentFixture<UpdateCourseRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCourseRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCourseRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

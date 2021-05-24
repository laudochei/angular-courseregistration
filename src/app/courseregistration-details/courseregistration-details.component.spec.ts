import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseRegistrationDetailsComponent } from './courseregistration-details.component';

describe('CourseRegistrationDetailsComponent', () => {
  let component: CourseRegistrationDetailsComponent;
  let fixture: ComponentFixture<CourseRegistrationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRegistrationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRegistrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

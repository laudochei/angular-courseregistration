import { TestBed } from '@angular/core/testing';
import { CourseRegistrationService } from './courseregistration.service';

describe('CourseRegistrationService', () => {
  let service: CourseRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseRegistrationService);
  });

    it('should be created', () => {
    const service: CourseRegistrationService = TestBed.get(CourseRegistrationService);
    expect(service).toBeTruthy();
  });
});

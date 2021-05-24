import { CourseRegistrationService } from '../courseregistration.service';
import { CourseRegistration } from '../courseregistration';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-courseregistration',
  templateUrl: './create-courseregistration.component.html',
  styleUrls: ['./create-courseregistration.component.css']
})
export class CreateCourseRegistrationComponent implements OnInit {

  courseregistration: CourseRegistration = new CourseRegistration();
  submitted = false;

  constructor(private courseregistrationService: CourseRegistrationService,
    private router: Router) { }

  ngOnInit() {
  }

  newCourseRegistration(): void {
    this.submitted = false;
    this.courseregistration = new CourseRegistration();
  }

  save() {
    this.courseregistrationService
    .createCourseRegistration(this.courseregistration).subscribe(data => {
      console.log(data)
      this.courseregistration = new CourseRegistration();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/courseregistration']);
  }
}
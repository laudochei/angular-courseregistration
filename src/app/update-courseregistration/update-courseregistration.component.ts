import { Component, OnInit } from '@angular/core';
import { CourseRegistration } from '../courseregistration';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseRegistrationService } from '../courseregistration.service';

@Component({
  selector: 'app-update-courseregistration',
  templateUrl: './update-courseregistration.component.html',
  styleUrls: ['./update-courseregistration.component.css']
})
export class UpdateCourseRegistrationComponent implements OnInit {

  id!: number;
  courseregistration!: CourseRegistration;
  //submitted = false;
  submitted: boolean = false;
  
  

  constructor(private route: ActivatedRoute,private router: Router,
    private courseregistrationService: CourseRegistrationService){ }

  ngOnInit() {
    this.courseregistration = new CourseRegistration();

    this.id = this.route.snapshot.params['id'];
    
    this.courseregistrationService.getCourseRegistration(this.id)
      .subscribe(data => {
        console.log(data)
        this.courseregistration = data;
      }, error => console.log(error));
  }

  updateCourseRegistration() {
    this.courseregistrationService.updateCourseRegistration(this.id, this.courseregistration)
      .subscribe(data => {
        console.log(data);
        this.courseregistration = new CourseRegistration();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCourseRegistration();    
  }

  gotoList() {
    this.router.navigate(['/courseregistration']);
  }
}
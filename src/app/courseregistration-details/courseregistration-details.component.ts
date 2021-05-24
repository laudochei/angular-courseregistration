import { CourseRegistration } from '../courseregistration';
import { Component, OnInit, Input } from '@angular/core';
import { CourseRegistrationService } from '../courseregistration.service';
import { CourseRegistrationListComponent } from '../courseregistration-list/courseregistration-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courseregistration-details',
  templateUrl: './courseregistration-details.component.html',
  styleUrls: ['./courseregistration-details.component.css']
})
export class CourseRegistrationDetailsComponent implements OnInit {

  id!: number;
  courseregistration!: CourseRegistration;

  constructor(private route: ActivatedRoute,private router: Router,
    private courseregistrationService: CourseRegistrationService) { }

  ngOnInit() {
    this.courseregistration = new CourseRegistration();

    this.id = this.route.snapshot.params['id'];
    
    this.courseregistrationService.getCourseRegistration(this.id)
      .subscribe(data => {
        console.log(data)
        this.courseregistration = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['courseregistration']);
  }
}
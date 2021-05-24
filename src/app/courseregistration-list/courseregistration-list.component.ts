/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import { CourseRegistrationDetailsComponent } from '../courseregistration-details/courseregistration-details.component';
import { Observable } from "rxjs";
import { CourseRegistrationService } from "../courseregistration.service";
import { CourseRegistration } from "../courseregistration";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-courseregistration-list",
  templateUrl: "./courseregistration-list.component.html",
  styleUrls: ["./courseregistration-list.component.css"]
})
export class CourseRegistrationListComponent implements OnInit {
  courseregistrations!: Observable<CourseRegistration[]>;

  constructor(private courseregistrationService: CourseRegistrationService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.courseregistrations = this.courseregistrationService.getCourseRegistrationList();
  }

  deleteCourseRegistration(id: number) {
    this.courseregistrationService.deleteCourseRegistration(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  courseregistrationDetails(id: number){
    this.router.navigate(['details', id]);
  }
  
  updateCourseRegistration(id: number){
    this.router.navigate(['update', id]);
  }

}
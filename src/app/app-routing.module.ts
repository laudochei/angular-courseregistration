import { CourseRegistrationDetailsComponent } from './courseregistration-details/courseregistration-details.component';
import { CreateCourseRegistrationComponent } from './create-courseregistration/create-courseregistration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseRegistrationListComponent } from './courseregistration-list/courseregistration-list.component';
import { UpdateCourseRegistrationComponent } from './update-courseregistration/update-courseregistration.component';

const routes: Routes = [
  { path: '', redirectTo: 'courseregistration', pathMatch: 'full' },
  { path: 'courseregistration', component: CourseRegistrationListComponent },
  { path: 'add', component: CreateCourseRegistrationComponent },
  { path: 'update/:id', component: UpdateCourseRegistrationComponent },
  { path: 'details/:id', component: CourseRegistrationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
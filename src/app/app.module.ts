import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCourseRegistrationComponent } from './create-courseregistration/create-courseregistration.component';
import { CourseRegistrationDetailsComponent } from './courseregistration-details/courseregistration-details.component';
import { CourseRegistrationListComponent } from './courseregistration-list/courseregistration-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCourseRegistrationComponent} from './update-courseregistration/update-courseregistration.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateCourseRegistrationComponent,
    CourseRegistrationDetailsComponent,
    CourseRegistrationListComponent,
    UpdateCourseRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

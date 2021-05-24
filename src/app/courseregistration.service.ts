import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseRegistrationService {

  private baseUrl = 'http://localhost:8099/api/v1/courseregistration';
  
  constructor(private http: HttpClient) { }

  getCourseRegistration(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCourseRegistration(courseregistration: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, courseregistration);
  }

  updateCourseRegistration(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCourseRegistration(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCourseRegistrationList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
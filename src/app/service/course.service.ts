
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../course-management/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
   apiUrl = 'http://localhost:5000/api/courses'; // Adjust the URL to your backend API endpoint

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  createCourse(courseData: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, courseData);
  }

  updateCourse(courseId: number, courseData: Course): Observable<Course> {
    const url = `${this.apiUrl}/${courseId}`;
    return this.http.put<Course>(url, courseData);
  }

  deleteCourse(courseId: number): Observable<any> {
    const url = `${this.apiUrl}/${courseId}`;
    return this.http.delete<any>(url);
  }
  GetAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('https://localhost:7004/api/Sessions');
}
}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../course-management/course.model';
import { SessionManagementComponent } from '../session-management/session-management.component';
import { Session } from '../session-management/session.model';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  apiUrl = 'https://localhost:7004/api/Sessions'; 

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('https://localhost:7004/api/Sessions');
  }

  createSession(sessionData: Session): Observable<Session> {
    return this.http.post<Session>(this.apiUrl, sessionData);
  }

  GetAllSession(): Observable<Session[]> {
    return this.http.get<Session[]>('https://localhost:7004/api/Sessions');
}
}
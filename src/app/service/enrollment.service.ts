// enrollment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'http://localhost:5000/api/enrollments'; // Adjust the URL to your backend API endpoint

  constructor(private http: HttpClient) { }

  enrollParticipant(enrollmentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, enrollmentData);
  }


}

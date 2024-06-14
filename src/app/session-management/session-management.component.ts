

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../service/session.service';
import { Course } from '../course-management/course.model';
import { Session } from './session.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-management',
  templateUrl: './session-management.component.html',
  styleUrls: ['./session-management.component.css']
})
export class SessionManagementComponent implements OnInit {
  sessionForm!: FormGroup;
  courses: Course[] = []; 
  session:Session={
    course: "", 
    date: "", 
    time: "", 
    location: "", 
    instructor: ""

  }

  constructor(private formBuilder: FormBuilder, private sessionService: SessionService,private route:Router) { }

  ngOnInit(): void {
    this.sessionForm = this.formBuilder.group({
      courseId: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required],
      instructor: ['', Validators.required]
    });

    this.loadCourses();
  }

  loadCourses(): void {
    
    this.sessionService.getCourses()
      .subscribe(courses => {
        this.courses = courses;
      });
  }

  onSubmit(form:any): void {
    console.log("i am in onsubmit")
   // if (this.sessionForm.valid) {
      this.sessionService.createSession(this.sessionForm.value)
        .subscribe(response => {
          console.log('Session created successfully:', response);
          
        }, error => {
          console.error('Error creating session:', error);
          
        });
   // }
    this.route.navigate(['sessionlist'])
  }
 
  
}

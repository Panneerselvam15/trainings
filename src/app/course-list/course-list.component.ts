import { Component, OnInit } from '@angular/core';
import { Course } from '../course-management/course.model';
import { Router } from '@angular/router';
import { CourseManagementComponent } from '../course-management/course-management.component';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
course:Course={   
  name:"",
  
  instructor: "",
  duration: "",
  startDate: "",
  endDate: "",
  location:"",
  maxCapacity:""
}
  constructor(private router:Router,private service:CourseService) { }
  courses:Course[]=[];

  ngOnInit(): void {
    this.fetchSessions();
  }

  fetchSessions(): void {
    this.service.GetAllCourses().subscribe({
      next: (courses) => {
        this.courses = this.courses;
      },
      error: (error) => {
        console.error('Error fetching sessions:', error);
      }
    });
  }
  
}



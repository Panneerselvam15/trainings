

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../service/course.service';
import { Course } from './course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {
  courseForm!: FormGroup; 
  
  course:Course={   
    name:"",
    
    instructor: "",
    duration: "",
    startDate: "",
    endDate: "",
    location:"",
    maxCapacity:""
  }
  
  constructor(private formBuilder: FormBuilder, private courseService: CourseService,private route:Router) { }

  ngOnInit(): void {
   
   this.courseForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      instructor: ['', Validators.required],
      duration: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      location: [''],
      maxCapacity: ['', Validators.required],
    });
  }

  onSubmit() {
   /* this.course.name=form.value.name
    
    this.course.instructor=form.value.instructor
    this.course.duration=form.value.duration
    this.course.startDate=form.value.startDate
    this.course.endDate=form.value.endDate
    this.course.location=form.value.location
    this.course.maxCapacity=form.value.maxCapacity*/
    this.route.navigate(['courselist'])

  
      
    }
  }


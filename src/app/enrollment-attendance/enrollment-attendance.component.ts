

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { EnrollmentService } from '../service/enrollment.service';

// @Component({
//   selector: 'app-enrollment-attendance',
//   templateUrl: './enrollment-attendance.component.html',
//   styleUrls: ['./enrollment-attendance.component.css']
// })
// export class EnrollmentAttendanceComponent implements OnInit {
//   enrollmentForm!: FormGroup;
//   courseId!: number; 

//   constructor(
//     private route: ActivatedRoute,
//     private formBuilder: FormBuilder,
//     private enrollmentService: EnrollmentService
//   ) { }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.courseId = +params['id']; 
//     });

//     this.enrollmentForm = this.formBuilder.group({
//       participantId: ['', Validators.required],
//       sessionDate: ['', Validators.required],
//       attendanceStatus: ['', Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.enrollmentForm.valid) {
      
//     }
//   }
// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollment-attendance',
  templateUrl: './enrollment-attendance.component.html',
  styleUrls: ['./enrollment-attendance.component.css']
})
export class EnrollmentAttendanceComponent {
  enrollmentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.enrollmentForm = this.formBuilder.group({
      participantId: ['', Validators.required],
      sessionDate: ['', Validators.required],
      attendanceStatus: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // Submit logic here
    // After successful submission, navigate to the Attendance List route
    this.router.navigate(['Attedance-list']); // Replace '/attendance-list' with the actual route of your Attendance List component
  }
}

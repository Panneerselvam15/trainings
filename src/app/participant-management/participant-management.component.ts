

import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participant-management',
  templateUrl: './participant-management.component.html',
  styleUrls: ['./participant-management.component.css']
})
export class ParticipantManagementComponent {
  participantForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.participantForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      department: [''],
      jobTitle: ['']
    });
  }

  onSubmit(): void {
    // Submit logic here
    // After successful submission, navigate to the participant list route
    this.router.navigate(['Participant-list']); // Replace '/participant-list' with the route to your participant list
  }
}

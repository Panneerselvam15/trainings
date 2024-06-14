import { Injectable } from '@angular/core';
import { RegistrationData } from '../registration/registration.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  stu:RegistrationData={firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: new Date(2024,0,12),
    address: '',
    phoneNumber: '',
    major: '',}
}

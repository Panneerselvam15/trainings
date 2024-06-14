import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { ParticipantManagementComponent } from './participant-management/participant-management.component';
import { SessionManagementComponent } from './session-management/session-management.component';
import { EnrollmentAttendanceComponent } from './enrollment-attendance/enrollment-attendance.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseListComponent } from './course-list/course-list.component';
import { UserComponent } from './user/user.component';
import { SessionListComponent } from './session-list/session-list.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseManagementComponent,
    ParticipantManagementComponent,
    SessionManagementComponent,
    EnrollmentAttendanceComponent,
    RegistrationComponent,
    LoginComponent,
    CourseListComponent,
    UserComponent,
    SessionListComponent,
    ParticipantListComponent,
    AttendanceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

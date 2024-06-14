import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { ParticipantManagementComponent } from './participant-management/participant-management.component';
import { SessionManagementComponent } from './session-management/session-management.component';
import { EnrollmentAttendanceComponent } from './enrollment-attendance/enrollment-attendance.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SessionListComponent } from './session-list/session-list.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'course', component: CourseManagementComponent },
  { path: 'participants', component: ParticipantManagementComponent },
  { path: 'session', component : SessionManagementComponent},
  { path: 'enrollment', component : EnrollmentAttendanceComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegistrationComponent},
  { path: 'courselist',component:CourseListComponent},
  { path: 'sessionlist',component:SessionListComponent},
  { path: 'Participant-list',component:ParticipantListComponent},
  {path: 'Attedance-list',component:AttendanceListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

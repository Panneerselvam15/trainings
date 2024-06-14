import { Component, OnInit } from '@angular/core';
import { Session } from '../session-management/session.model';
import { Router } from '@angular/router';
import { SessionManagementComponent } from '../session-management/session-management.component';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {


  session:Session={
    course: "", 
    date: "", 
    time: "", 
    location: "", 
    instructor: ""
  }

  constructor(private service:SessionService, private router:Router) { }

  sessions: Session[] = [];

 

  ngOnInit(): void {
    this.fetchSessions();
  }

  fetchSessions(): void {
    this.service.GetAllSession().subscribe({
      next: (sessions) => {
        this.sessions = sessions;
      },
      error: (error) => {
        console.error('Error fetching sessions:', error);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ParticipantManagementComponent } from '../participant-management/participant-management.component';
import { ParticipantService } from '../service/participant.service';
import { Participant } from '../participant-management/participant.model';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  participants: ParticipantManagementComponent[] = [];

  constructor(private participantService: ParticipantService) { }
  participant:Participant[]=[]

  ngOnInit(): void {
    this.fetchParticipants();
  }

  fetchParticipants(): void {
    this.participantService.GetAllParticipants()
      .subscribe(participant => {
        this.participant = participant;
      });
  }
}

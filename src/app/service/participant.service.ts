import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from '../participant-management/participant.model';


@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private apiUrl = 'http://localhost:5000/api/participants';

  constructor(private http: HttpClient) { }
  registerParticipant(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(this.apiUrl, participant);


}
GetAllParticipants(): Observable<Participant[]> {
  return this.http.get<Participant[]>('https://localhost:7004/api/Sessions')
}
}
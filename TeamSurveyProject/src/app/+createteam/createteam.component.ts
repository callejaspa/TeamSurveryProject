import { Component, OnInit } from '@angular/core';
import { Team, TeamDto } from '../models/team.model';

@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.scss']
})
export class CreateteamComponent implements OnInit {
  public team: Team;

  public mockTeam: Team;

  public teams: Array<TeamDto> = [];

  constructor() {
    this.team = new Team();
    this.mockTeam = new Team();
  }

  ngOnInit() {
    // this.mockTeam.Name = 'ABC';
    // this.mockTeam.Instructor = 'Dr. Summet';
    // this.mockTeam.Course = 'CMS484';
    // this.mockTeam.Semester = 'Spring';
    // this.teams.push(this.mockTeam.toDto());
  }
}

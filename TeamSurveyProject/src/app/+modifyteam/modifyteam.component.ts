import { Component, OnInit } from '@angular/core';
import { TeamMember, TeamMemberDto } from '../models/teamMember.model';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-modifyteam',
  templateUrl: './modifyteam.component.html',
  styleUrls: ['./modifyteam.component.scss']
})
export class ModifyteamComponent implements OnInit {
  public teamMember: TeamMember;

  public teamMembers: Array<TeamMemberDto> = [];

  public mockMember: TeamMember = new TeamMember();

  constructor(public afAuth: AngularFireAuth) {
    this.teamMember = new TeamMember();
  }

  ngOnInit() {
    this.mockMember.FirstName = 'Ronova';
    this.mockMember.LastName = 'Afroz';
    this.mockMember.Email = 'rafroz@rollins.edu';
    this.teamMembers.push(this.mockMember.toDto());
    this.mockMember.FirstName = 'Ben';
    this.mockMember.LastName = 'Blood';
    this.mockMember.Email = 'benlblood@gmail.com';
    this.teamMembers.push(this.mockMember.toDto());
    this.mockMember.FirstName = 'Pauline';
    this.mockMember.LastName = 'Callejas';
    this.mockMember.Email = 'pcallejas@rollins.edu';
    this.teamMembers.push(this.mockMember.toDto());
  }

  onSubmit() {
    this.teamMembers.push(this.teamMember.toDto());
    this.teamMember.clear();
  }

  clearTeam() {
    this.teamMembers.length = 0;
  }

  async sendSigninLink(email) {
    const actionCodeSettings = {
      url: 'http://localhost:4200/home?userCode=ZXCVBN123456',
      handleCodeInApp: true
    };
    try {
      await this.afAuth.auth.sendSignInLinkToEmail(
        email,
        actionCodeSettings
      );
    } catch (err) {
      console.log(err.message);
    }
  }

  removeMember(index) {
    console.log(index);
    this.teamMembers.splice(index, 1);
  }

  sendAllLink() {
    this.teamMembers.forEach(element => {
      this.sendSigninLink(element.Email);
    });
  }
}

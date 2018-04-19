import { Component, OnInit } from '@angular/core';
import { Team, TeamDto } from '../models/team.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.scss']
})
export class CreateteamComponent implements OnInit {
  public team: Team;
  private teamCollection: AngularFirestoreCollection<Team>;

  public mockTeam: Team;

  public teams: Array<Team> = [];

  constructor(private afs: AngularFirestore) {
    this.team = new Team();
    this.mockTeam = new Team();
    this.teamCollection = afs.collection('teams');
  }

  ngOnInit() {
    this.mockTeam.Name = 'ABC';
    this.mockTeam.Instructor = 'Dr. Summet';
    this.mockTeam.Course = 'CMS484';
    this.mockTeam.Semester = 'Spring';
    //this.teams.push(this.mockTeam);
    var teamsRef = this.teams;

    this.teamCollection.ref.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        
        doc.ref.collection('members').doc('ZXCVBN123456').get().then(function (memberDoc) {
          if (memberDoc.exists) {
            var totalSurveys = memberDoc.data().Surveys.length;
            console.log(totalSurveys);
            var completeSurveys = 0;
            memberDoc.data().Surveys.forEach(element => {
              console.log(element);
              if(element.AnswerOne !== '') {
                completeSurveys++;
              }
            });
            console.log(completeSurveys);
            console.log(memberDoc.data().Surveys[0].For);
            var currentTeam = doc.data() as Team;
            teamsRef.push(currentTeam);
          }
        });

        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        //var myTeam = doc.data() as Team;
        //teamsRef.push(myTeam);
      });
    }).catch(function (error) {
      console.log("Error getting documents: ", error);
    });

    // this.teamCollection.doc('team2test').ref.get().then(function (doc) {
    //   if (doc.exists) {
    //     var myTeam = doc.data() as Team;
    //     console.log("Document data:", myTeam);
    //     teamsRef.push(myTeam);

    //     console.log("Team's Name: ", myTeam.Name);
    //   } else {
    //     console.log("No such document!");
    //   }
    // }).catch(function (error) {
    //   console.log("Error getting document:", error);
    // });
  }
}

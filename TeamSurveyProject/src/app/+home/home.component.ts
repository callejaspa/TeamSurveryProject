//import { Teams } from './../models/teamsDummyData.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Team, TeamDto } from '../models/team.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teamCollection: AngularFirestoreCollection<Team>;
  public team: Team;
  public teams: Array<TeamDto> = [];
  public mockTeam: Team = new Team();

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.teamCollection = afs.collection("teams");
  }

  ngOnInit(): void {
    // this.mockTeam.Name = 'Team ABC';
    // this.mockTeam.Instructor = 'Dr. Summet';
    // this.mockTeam.Semester = 'Spring 2018';
    // this.mockTeam.Course = 'CMS 484';
    // this.teams.push(this.mockTeam.toDto());
    var teamsRef = this.teams;

    this.teamCollection.ref.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        teamsRef.push(doc.data() as Team);
      });
    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

    // var myDoc = this.teamCollection.doc('07BeM6YpbXIvUxfx8THs').ref.get().then(function (doc) {
    //   if (doc.exists) {
    //     teamsRef.push(doc.data() as Team);
    //     console.log("Document data:", doc.data());
    //   } else {
    //     console.log("No such document!");
    //   }
    // }).catch(function (error) {
    //   console.log("Error getting document:", error);
    // });
  }

  onSubmit(): void {

  }
}
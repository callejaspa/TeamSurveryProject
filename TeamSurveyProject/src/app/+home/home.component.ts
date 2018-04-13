//import { Teams } from './../models/teamsDummyData.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
<<<<<<< HEAD
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { TeamDto } from '../models/team.model';

=======
import { Team, TeamDto } from '../models/team.model';
import { Observable } from 'rxjs/Observable';
>>>>>>> master

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
<<<<<<< HEAD

  //teamStream: FirebaseListObservable<Teams[]>
  //public dummyData: DummyData;
  private teamCollection: AngularFirestoreCollection<TeamDto>;
  //private authStateSubscription: Subscription;

=======
  public team: Team;
  private teamCollection: AngularFirestoreCollection<Team>;
  //private authStateSubscription: Subscription;

  public teamStream: Observable<Team>;

>>>>>>> master
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.teamCollection = afs.collection('teams');
    //this.dummyData = new DummyData();
  }

  ngOnInit(): void {
<<<<<<< HEAD
        var myDoc = this.teamCollection.doc('07BeM6YpbXIvUxfx8THs').collection('members').doc('ZXCVBN123456').ref.get().then(function (doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
          } else {
            console.log("No such document!");
          }
        }).catch(function (error) {
          console.log("Error getting document:", error);
        });

    //const firebasePath = ``
=======
    this.teamCollection.doc('team2test').ref.get().then(function (doc) {
      if (doc.exists) {
        var myTeam = doc.data() as Team;
        console.log("Document data:", doc.data());
        console.log("Team's Name: ", myTeam.Name);
      } else {
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

    

>>>>>>> master
    // this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User) => {
    //   if (user) {
    //     console.log(user.uid);
    //     this.dummyData.$key = user.uid;
    //   }
    //   else {
    //     this.dummyData.clear();
    //   }
    // })
  }

  onSubmit(): void {
    //this.dummyCollection.doc(this.dummyData.$key).set(this.dummyData.toDto());
    //this.dummyCollection.add(this.dummyData.toDto());
  }
}

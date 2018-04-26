import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Survey } from '../models/Survey.model';
import { DummyDto, DummyData } from '../models/dummyData.model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  public dummyData: DummyData;
  private dummyCollection: AngularFirestoreCollection<DummyDto>;
  private authStateSubscription: Subscription;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { 
    this.dummyCollection = afs.collection('users');
    this.dummyData = new DummyData(new Survey());
  }

  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        console.log(user.uid);
        this.dummyData.$key = user.uid;
        this.dummyCollection.doc(this.dummyData.$key).set({ Name: user.displayName, Email: user.email }, { merge: true } );
      } else {
        this.dummyData.clear();
      }
    });
  }

  onSubmit(): void {
    //console.log(this.dummyData.Survey.Question3);
    this.dummyCollection.doc(this.dummyData.$key).collection('surveys').add(this.dummyData.toDto());
    //this.dummyCollection.doc(this.dummyData.$key).set(this.dummyData.toDto(), { merge: true } );
    //this.dummyCollection.add(this.dummyData.toDto());
  }
}

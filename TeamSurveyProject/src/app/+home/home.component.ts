import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { DummyData, DummyDto } from '../models/dummyData.model';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //public dummyData: DummyData;
  //private dummyCollection: AngularFirestoreCollection<DummyDto>;
  //private authStateSubscription: Subscription;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { 
    //this.dummyCollection = afs.collection('items');
    //this.dummyData = new DummyData();
  }

  ngOnInit(): void {
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

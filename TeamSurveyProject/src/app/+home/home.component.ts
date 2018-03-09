import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { DummyData, DummyDto } from '../models/dummyData.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dummyData: DummyData;
  private dummyCollection: AngularFirestoreCollection<DummyDto>;

  constructor(afs: AngularFirestore) { 
    this.dummyCollection = afs.collection('items');
    this.dummyData = new DummyData();
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.dummyCollection.add(this.dummyData.toDto());
  }

  clearForm(): void {
    this.dummyData.FirstName = "";
    this.dummyData.LastName = "";
  }

}

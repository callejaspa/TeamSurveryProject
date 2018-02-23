import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DummyData, DummyDto } from './models/dummyData.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public dummyData: DummyData;
  private dummyCollection: AngularFirestoreCollection<DummyDto>;

  constructor(afs: AngularFirestore) {
    this.dummyCollection = afs.collection('items');
    this.dummyData = new DummyData();
  }

  onSubmit(): void {
    this.dummyCollection.add(this.dummyData.toDto());
  }

  clearForm(): void {
    this.dummyData.FirstName = "";
    this.dummyData.LastName = "";
  }
}

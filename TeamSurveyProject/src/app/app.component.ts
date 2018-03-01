import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private authStateSubscription: Subscription;
  showSignOut = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        // Signin just happened
        console.log("User is signed in as: " + user.displayName);
        this.showSignOut = true;
        console.log("Sign in finished.");
      } else {
        // Signout just happened
        this.showSignOut = false;
        this.router.navigate(['/signin']);
        console.log("Sign out finished.");
      }
    })
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }
}

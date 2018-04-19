import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user;
  email: string;
  emailSent = false;

  errorMessage: string;

  

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    
  }

  async sendSigninLink() {
    const actionCodeSettings = {
      url: 'http://localhost:4200/home?userCode=ZXCVBN123456',
      handleCodeInApp: true
    };
    try {
      await this.afAuth.auth.sendSignInLinkToEmail(
        this.email,
        actionCodeSettings
      );
      window.localStorage.setItem('emailForSignIn', this.email);
      this.emailSent = true;
    } catch (err) {
      this.errorMessage = err.message;
    }
    

    // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
    //   this.router.navigate(['/']);
    // });
  }
}

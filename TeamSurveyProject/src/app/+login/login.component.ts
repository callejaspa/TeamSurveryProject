import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user;
  email: string;
  emailSent = false;

  errorMessage: string;

  

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    const url = this.router.url;
    this.confirmSignIn(url);

  }

  private async confirmSignIn(url) {
    try {
      if (this.afAuth.auth.isSignInWithEmailLink(url)) {
        let email = window.localStorage.getItem('emailForSignIn'); 
        
        // If missing email, prompt user for it
        if (!email) {
          email = window.prompt('Please provide your email for confirmation.');
        }

        // Signin user and remove the email localStorage
        const result = await this.afAuth.auth.signInWithEmailLink(email, url);
        window.localStorage.removeItem('emailForSignIn');
        
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  async sendSigninLink() {
    const actionCodeSettings = {
      url: 'http://localhost:4200/signin',
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

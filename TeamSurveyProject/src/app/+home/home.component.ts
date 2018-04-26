//import { Teams } from './../models/teamsDummyData.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Team, TeamDto } from '../models/team.model';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Survey } from '../models/Survey.model';
import { SurveyDataService } from '../survey-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private teamCollection: AngularFirestoreCollection<Team>;
  private userCode: string;
  public team: Team;
  public teams: Array<Team>;
  public surveys: Array<Survey>

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, 
    private activatedRoute: ActivatedRoute, private router: Router,
    private data: SurveyDataService) {
    this.teamCollection = afs.collection('teams');
    this.team = new Team();
    this.teams = new Array<Team>();
    this.surveys = new Array<Survey>();
  }

  ngOnInit() {
    const url = this.router.url;

    if (url.includes('?userCode')) {
      console.log('Confirming Sign-in...');
      this.confirmSignIn(url);
    }

    this.activatedRoute.queryParams.subscribe(params => {
      this.userCode = params['userCode'];
    });
    this.LoadTeamData();
  }

  private LoadTeamData() {
    var teamsRef = this.teams;
    var userCodeRef = this.userCode;
    var surveysRef = this.surveys;

    this.teamCollection.ref.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.collection('members').doc(userCodeRef).get().then(function (memberDoc) {
          if (memberDoc.exists) {
            surveysRef = memberDoc.data().Surveys as Array<Survey>;
            console.log(surveysRef);
            var totalSurveys = surveysRef.length;
            var completeSurveys = 0;
            surveysRef.forEach(element => {
              if (element.AnswerOne !== '') {
                completeSurveys++;
              }
            });
            var currentTeam = doc.data() as Team;
            currentTeam.SurveysTotal = totalSurveys;
            currentTeam.SurveysComplete = completeSurveys;
            currentTeam.Surveys = surveysRef;
            teamsRef.push(currentTeam);
          }
        });
      });
    }).catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  }

  private async confirmSignIn(url) {
    try {
      if (this.afAuth.auth.isSignInWithEmailLink(url)) {
        let email = window.localStorage.getItem('emailForSignIn');

        setTimeout((router: Router) => {
          this.router.navigate(['home']);
        }, 5000); 
        
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
}

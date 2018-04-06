import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './+home/home.component';
import { SurveyComponent } from './+survey/survey.component';
import { SigninComponent } from './+signin/signin.component';
import { CreateteamComponent } from './+createteam/createteam.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'createteam', component: CreateteamComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

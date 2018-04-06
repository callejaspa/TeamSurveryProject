import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.scss']
})
export class CreateteamComponent implements OnInit {
  totalEstimate = 10;
  sumOfEstimate = 20;
  ctx = {
    estimate: this.totalEstimate
  };

  constructor() { }

  ngOnInit() {
  }

}

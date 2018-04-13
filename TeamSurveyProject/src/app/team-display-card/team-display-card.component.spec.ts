import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDisplayCardComponent } from './team-display-card.component';

describe('TeamDisplayCardComponent', () => {
  let component: TeamDisplayCardComponent;
  let fixture: ComponentFixture<TeamDisplayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDisplayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

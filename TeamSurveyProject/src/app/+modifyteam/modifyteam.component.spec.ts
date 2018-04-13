import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyteamComponent } from './modifyteam.component';

describe('ModifyteamComponent', () => {
  let component: ModifyteamComponent;
  let fixture: ComponentFixture<ModifyteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

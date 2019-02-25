import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayWindowComponent } from './play-window.component';

describe('PlayWindowComponent', () => {
  let component: PlayWindowComponent;
  let fixture: ComponentFixture<PlayWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

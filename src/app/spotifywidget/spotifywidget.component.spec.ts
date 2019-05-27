import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifywidgetComponent } from './spotifywidget.component';

describe('SpotifywidgetComponent', () => {
  let component: SpotifywidgetComponent;
  let fixture: ComponentFixture<SpotifywidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifywidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifywidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

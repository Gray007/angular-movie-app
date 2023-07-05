import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePosterPageComponent } from './movie-poster-page.component';

describe('MoviePosterPageComponent', () => {
  let component: MoviePosterPageComponent;
  let fixture: ComponentFixture<MoviePosterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviePosterPageComponent]
    });
    fixture = TestBed.createComponent(MoviePosterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

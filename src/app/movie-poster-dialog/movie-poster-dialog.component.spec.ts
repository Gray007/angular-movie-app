import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePosterDialogComponent } from './movie-poster-dialog.component';

describe('MoviePosterDialogComponent', () => {
  let component: MoviePosterDialogComponent;
  let fixture: ComponentFixture<MoviePosterDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviePosterDialogComponent]
    });
    fixture = TestBed.createComponent(MoviePosterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

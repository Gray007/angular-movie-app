import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-poster-dialog',
  template: `
    <img [src]="posterUrl" alt="Movie Poster" />
  `
})
export class MoviePosterDialogComponent {
  posterUrl: string;

  constructor(
    public dialogRef: MatDialogRef<MoviePosterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.posterUrl = data;
  }
}
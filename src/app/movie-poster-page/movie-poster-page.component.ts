import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-poster-page',
  template: ` <img [src]="posterUrl" alt="Movie Poster" /> `,
})
export class MoviePosterPageComponent implements OnInit {
  posterUrl: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.posterUrl = decodeURIComponent(params['posterUrl']);
    });
  }
}
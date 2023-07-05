import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieService } from '../movie.service';
import { MoviePosterDialogComponent } from '../movie-poster-dialog/movie-poster-dialog.component';
import { Movie } from '../movie.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery: string;
  searchResults$: Observable<Movie[]>;

  constructor(private movieService: MovieService, private dialog: MatDialog, private router: Router) {
    this.searchQuery = '';
    this.searchResults$ = of([]);
  }

  performSearch(): void {
    if (!this.searchQuery) {
      this.searchResults$ = of([]);
      return;
    }

    this.searchResults$ = this.movieService
      .fetchDataFromBackend(this.searchQuery)
      .pipe(
        map((data) => {
          if (data) {
            return data.filter((movie: Movie) => Number(movie.Year) >= 2000);
          } else {
            return [];
          }
        })
      );
  }

  isCurrentYear(year: string): boolean {
    const currentYear = new Date().getFullYear();
    return year === currentYear.toString();
  }

  showMoviePoster(movie: Movie): void {
    const dialogRef = this.dialog.open(MoviePosterDialogComponent, {
      data: movie.Poster,
    });
  }

}
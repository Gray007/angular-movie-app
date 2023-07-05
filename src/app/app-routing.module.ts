import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieService } from './movie.service';
import { MoviePosterPageComponent } from './movie-poster-page/movie-poster-page.component';


const routes: Routes = [
  { path: 'movie-poster', component: MoviePosterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MovieService],
})
export class AppRoutingModule {}

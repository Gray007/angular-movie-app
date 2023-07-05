import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'omdb-movie-app';
  @ViewChild('searchComponent', { read: ViewContainerRef })
  searchComponent!: ViewContainerRef;

  constructor() {
    setTimeout(() => {
      this.loadSearch();
    }, 2000)
  }

  async loadSearch() {
    const { SearchComponent } = await import('./search/search.component');
    this.searchComponent.clear();
    this.searchComponent.createComponent(SearchComponent);
  }
}

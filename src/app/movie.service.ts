import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private baseUrl = 'https://omdb-api-gateway.onrender.com/api'; 

  constructor(private http: HttpClient) { }

  fetchDataFromBackend(query: string): Observable<any> {
    const url = `${this.baseUrl}/omdb/search?query=${encodeURIComponent(query)}`;

    return this.http.get(url);
  }
}
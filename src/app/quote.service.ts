import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  category: string = '';

  constructor(private http: HttpClient) {}

  getQuote() {
    return this.http.get('https://api.api-ninjas.com/v1/quotes?category=');
  }
}

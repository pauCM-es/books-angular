import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiNYT_url: string = 'https://api.nytimes.com/svc/books/v3/'
  bestSellers_url: string = 'lists/current/hardcover-fiction.json'
  apiNYT_key: string = '?api-key=JaJyTjgJLZAJvAQ3hfqju1TllYnjuZjO'

  constructor(private http: HttpClient) { }

  getBestSellers(){
    return this.http.get(`${this.apiNYT_url}${this.bestSellers_url}${this.apiNYT_key}`)
  }
  
}

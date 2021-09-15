import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class DataRestService {

  constructor(private http : HttpClient) { }
  
  url : string = "https://jsonplaceholder.typicode.com/posts"

  getPosts()
  {
    return this.http.get<Posts[]>(this.url);
  }
}
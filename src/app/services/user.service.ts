import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../Models/news';
import { Newsdetails } from '../Models/newsdetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = `https://localhost:44385/api/User/news`;

  constructor(private http:HttpClient) { }

  getAllNews():Observable<News>
  {
    return this.http.get<News>(this.apiUrl);
  }

  getNewsDetails(id:number):Observable<Newsdetails>
  {
    return this.http.get<Newsdetails>(`${this.apiUrl}/${id}`);
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserResponse, User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private apiUrl = 'https://user-list-backend-one.vercel.app/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(this.apiUrl);
  }

  seedUsers(): Observable<any> {
    return this.http.post(`${this.apiUrl}/seed`, {});
  }
}

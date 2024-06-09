import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environmets } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private baseUrl =  environmets.baseUrl;
  private user?: User;

  get currentUser(): User | undefined {
    if ( !this.user ) return undefined;
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/1`)
    .pipe(
      tap( user => this.user = user),
      tap( user => localStorage.setItem('token', user.id.toString()))
    );    
  }

}

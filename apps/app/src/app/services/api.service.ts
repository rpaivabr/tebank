import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { LoginResponse } from '@tebank/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private api = environment.api
  tokenSubject = new BehaviorSubject<string>('');
  token$ = this.tokenSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>(`${this.api}/login`, { email, password })
      .pipe(tap(res => this.tokenSubject.next(res.token)))
  }

  isAuth(): Observable<boolean> {
    return this.token$.pipe(map(token => !!token));
  }

  logout(): void {
    this.tokenSubject.next('');
  }
}

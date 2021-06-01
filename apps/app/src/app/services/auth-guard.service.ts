import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

  constructor(private api: ApiService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.api
      .isAuth()
      .pipe(
        tap((isAuth: boolean) => (!isAuth ? this.router.navigateByUrl('/login') : null)),
      );
  }
}

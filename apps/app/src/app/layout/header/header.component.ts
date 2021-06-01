import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'tebank-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  token$ = this.api.token$;

  constructor(
    private api: ApiService,
    private router: Router
  ) {}

  logout(event: MouseEvent): void {
    event.preventDefault();
    this.api.logout();
    this.router.navigateByUrl('/login');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'tebank-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(
    private api: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('r.paivabr@gmail.com', Validators.required),
      password: new FormControl('12345678', [Validators.required, Validators.minLength(8)])
    })
  }

  handleClick() {
    const { email, password } = this.loginForm.value;
    this.api.login(email, password).subscribe(
      () => this.router.navigate(['home'])
    )
  }

}

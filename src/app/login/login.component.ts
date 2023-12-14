import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isLoading: boolean;
  constructor(private loginService: LoginService, private router: Router) {
    this.isLoading = false;
  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
    ]),
  });

  handleLogin(formGroup: FormGroup) {
    this.loginService.login(formGroup.value).subscribe({
      next: (res) => {
        localStorage.setItem('userToken', res.token);
        this.loginService.decodedUserData();
        this.isLoading = true;
        if (res.status === 'success') {
          this.router.navigate(['home']);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

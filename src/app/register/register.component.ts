import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  isLoading: boolean;
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {
    this.isLoading = false;
  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
    ]),
    passwordConfirm: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
    ]),
  });

  handleRegistration(formGroup: FormGroup) {
    this.registerService.register(formGroup.value).subscribe({
      next: (res) => {
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

import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLogged: boolean = false;
  constructor(private loginService: LoginService) {
    loginService.userData.subscribe({
      next: () => {
        if (loginService.userData.getValue() !== null) {
          this.isLogged = true;
        } else {
          this.isLogged = false;
        }
      },
    });
  }
  logout() {
    this.loginService.logout();
  }
}

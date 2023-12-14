import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userData = new BehaviorSubject(
    JSON.stringify(localStorage.getItem('userToken')) || null
  );
  constructor(private httpClient: HttpClient, private router: Router) {}

  decodedUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: any = jwtDecode(encodedToken);

    this.userData.next(decodedToken);
  }

  login(values: object): Observable<any> {
    return this.httpClient.post(
      'http://127.0.0.1:3000/api/v1/users/login',
      values
    );
  }

  logout() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this.router.navigate(['/login']);
  }
}

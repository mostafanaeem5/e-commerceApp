import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}
  register(values: object): Observable<any> {
    return this.httpClient.post(
      'http://127.0.0.1:3000/api/v1/users/signup',
      values
    );
  }
}

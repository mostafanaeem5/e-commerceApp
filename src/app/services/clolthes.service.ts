import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClolthesService {
  constructor() {}
  clothes: string[] = ['shirt', 'jeans', 'tshirt'];
}

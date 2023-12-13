import { Component } from '@angular/core';
import { ClolthesService } from '../services/clolthes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ClolthesService],
})
export class HomeComponent {
  clothes: string[];
  constructor(private _clothes: ClolthesService) {
    this.clothes = _clothes.clothes;
  }
}

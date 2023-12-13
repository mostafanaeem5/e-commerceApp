import { TestBed } from '@angular/core/testing';

import { ClolthesService } from '../services/clolthes.service';

describe('ClolthesService', () => {
  let service: ClolthesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClolthesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

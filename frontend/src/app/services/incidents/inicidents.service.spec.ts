import { TestBed } from '@angular/core/testing';

import { InicidentsService } from './inicidents.service';

describe('InicidentsService', () => {
  let service: InicidentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicidentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

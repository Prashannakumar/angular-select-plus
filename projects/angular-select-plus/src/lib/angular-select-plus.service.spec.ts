import { TestBed } from '@angular/core/testing';

import { AngularSelectPlusService } from './angular-select-plus.service';

describe('AngularSelectPlusService', () => {
  let service: AngularSelectPlusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularSelectPlusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
